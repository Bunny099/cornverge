
import { AuthOptions } from "next-auth";
import { prisma } from "../lib/prisma";
import GoogleProvider from "next-auth/providers/google"
import { refreshAccessToken, upsertGoogleUser } from "./utils";
export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGlE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    scope: "openid profile email",
                    access_type: "offline",
                    prompt: "consent"
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, account, user }) {
            if (account && user) {
                const existingUser = await upsertGoogleUser(account, user)
                token.userId = existingUser.id;
                token.accessToken = existingUser.accessToken;
                token.refreshToken = existingUser.refreshToken;
                token.expiresAt = existingUser.expiresAt ? Number(existingUser.expiresAt) : null
            }
            
            if (typeof token.expiresAt === "number" && Date.now() > token.expiresAt) {
                try {
                    const refreshed = await refreshAccessToken(token.refreshToken as string)
                    token.accessToken = refreshed.access_token;
                    token.expiresAt = Date.now() + refreshed.expires_in * 1000;
                    if (refreshed.refresh_token) {
                        token.refreshToken = refreshed.refresh_token;
                        await prisma.user.update({
                            where: { id: token.userId as string },
                            data: {
                                refreshToken: refreshed.refresh_token
                            }
                        })
                        await prisma.user.update({
                            where: { id: token.userid as string },
                            data: {
                                accessToken: refreshed.access_token, expiresAt: token.expiresAt as number
                            }
                        })
                    }

                } catch (e) {
                    console.error("Error while refreshing token", e)
                }

            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.userId as string ?? null;
                session.accessToken = token.accessToken as string ?? null;
                session.refreshToken = token.refreshToken as string ?? null

            }
            return session
        }
    }
}
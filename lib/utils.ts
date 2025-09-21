import { prisma } from "./prisma";
export async function refreshAccessToken(refreshToken: string) {
    const url = "https://oauth2.googleapis.com/token?" +
        new URLSearchParams({
            client_id: process.env.GOOGLE_CLIENT_ID!,
            client_secret: process.env.GOOGLE_CLIENT_SECRET!,
            grant_type: "refresh_token",
            refresh_token: refreshToken
        })
    const response = await fetch(url, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST"
    })
    const refreshedTokens = response.json()
    if (!response.ok) throw refreshedTokens;
    return refreshedTokens
}

export async function upsertGoogleUser(account: any, user: any) {
    let existingUser = await prisma.user.findFirst({
        where: {
            providerId: account.providerAccountId
        }
    })
    if (!existingUser) {

        return await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                image: user.image,
                providerId: account.providerAccountId,
                accessToken: account.access_token ?? null,
                refreshToken: account.refresh_token ?? null,
                expiresAt: account.expires_at ? Number(account.expires_at * 1000) : null,
            }
        })

    } else {

        return prisma.user.update({
            where: { id: existingUser.id },
            data: {
                accessToken: account.access_token ?? existingUser.accessToken,
                refreshToken: account.refresh_token ?? existingUser.refreshToken,
                expiresAt: account.expires_at
                    ? Number(account.expires_at * 1000)
                    : existingUser.expiresAt
                        ? Number(existingUser.expiresAt)
                        : null,
            }
        })
    }

}
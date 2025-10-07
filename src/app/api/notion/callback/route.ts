
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../lib/auth";
import { prisma } from "../../../../../lib/prisma";


function logError(step: string, data: any) {
    console.error(`[Notion OAuth] ${step}:`, JSON.stringify(data, null, 2));
}

export async function GET(req: Request) {

    try {
        const { searchParams } = new URL(req.url);
        const code = searchParams.get("code");
        const state = searchParams.get("state"); 

        if (!code) {
            return NextResponse.json({ error: "No code provided in query params" }, { status: 400 });
        }

        console.log("[Notion OAuth] Received code:", code);

        // Prepare Basic Auth header
        const authHeader =
            "Basic " +
            Buffer.from(`${process.env.NOTION_CLIENT_ID}:${process.env.NOTION_CLIENT_SECRET}`).toString("base64");

        // Exchange code for token
        const tokenRes = await fetch("https://api.notion.com/v1/oauth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": authHeader,
            },
            body: JSON.stringify({
                grant_type: "authorization_code",
                code,
                redirect_uri: process.env.NOTION_REDIRECT_URI,
            }),
        });

        const tokenData = await tokenRes.json();

        if (!tokenRes.ok) {
            logError("Token exchange failed", tokenData);
            return NextResponse.json({ error: "Token exchange failed", details: tokenData }, { status: 400 });
        }

        console.log("[Notion OAuth] Token received:", tokenData);


        const session = await getServerSession(authOptions)
        if(!session?.user?.id){
            return NextResponse.json({error:"Not authenticated"},{status:203})
        }
        const userId = session?.user.id

        await prisma.notionIntegration.upsert({
            where: {
                userId
            },
            update: {
                accessToken: tokenData.access_token,
                refreshToken: tokenData.refresh_token,
                workspaceId: tokenData.workspace_id,
                workspaceName: tokenData.workspace_name,
                workspaceIcon: tokenData.workspace_icon,
                botId: tokenData.bot_id
            },
            create: {
                userId,
                accessToken: tokenData.access_token,
                refreshToken: tokenData.refresh_token,
                workspaceId: tokenData.workspace_id,
                workspaceName: tokenData.workspace_name,
                workspaceIcon: tokenData.workspace_icon,
                botId: tokenData.bot_id


            }
        })


        const origin = req.headers.get("origin") || "http://localhost:3000"; //for local dev
        const redirectUrl = `${origin}/dashboard/notion`;

        return NextResponse.redirect(redirectUrl);
    } catch (err) {
        console.error("[Notion OAuth] Unexpected error:", err);
        return NextResponse.json({ error: "Unexpected server error", details: err }, { status: 500 });
    }
}

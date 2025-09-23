import { NextResponse } from "next/server";

export async function GET() {

  const notionAuthUrl = "https://api.notion.com/v1/oauth/authorize"

  const params = new URLSearchParams({
    client_id: process.env.NOTION_CLIENT_ID as string,
    response_type: "code",
    owner: "user",
    redirect_uri: process.env.NOTION_REDIRECT_URI as string,
  });
  return NextResponse.redirect(`${notionAuthUrl}?${params.toString()}`)
  
}

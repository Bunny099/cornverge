import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../lib/auth";
import { Client } from "@notionhq/client"
export async function GET() {
    try {

        const session = await getServerSession(authOptions);
        if (!session?.user?.id) {
            return NextResponse.json("Unauthorized", { status: 403 })
        }
        const userId = session.user.id
        const notionIntegration = await prisma.notionIntegration.findUnique(
            {
                where: { userId },
                select: { accessToken: true }
            }
        )
        if (!notionIntegration?.accessToken) {
            return NextResponse.json("Notion is not connected!", { status: 400 })
        }
        const notion = new Client({ auth: notionIntegration.accessToken })
        const notionRes = await notion.search({
            filter: { property: "object", value: "data_source" }
        });


        if (!notionRes.results || notionRes.results.length === 0) {
            return NextResponse.json("No database found!", { status: 400 })
        }

        let dbRecords = notionRes.results.map((db: any) => ({
            userId,
            databaseId: db.id,
            title: db.title?.[0]?.plain_text || "untitle",
            url: db.url,


        }))
        await prisma.notionDatabase.createMany({ data: dbRecords, skipDuplicates: true })

        return NextResponse.json(dbRecords, { status: 202 })

    } catch (e) {
        return NextResponse.json("server error", { status: 500 })
    }
}
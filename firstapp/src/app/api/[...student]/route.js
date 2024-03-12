import { NextResponse } from "next/server"

export function GET(request, content) {
    console.log(content.params, 'jjjjjjjjjjj')
    return NextResponse.json({ data: content.params })
}
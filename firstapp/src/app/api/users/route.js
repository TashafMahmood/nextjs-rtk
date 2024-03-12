import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, res) {
    const data = users
    return NextResponse.json(data, { status: 200 })
}

export async function POST(request) {
    let payload = await request.json();
    if (!payload.name) {
        return NextResponse.json({ error: "please enter the required field", success: false }, { status: 400 })
    }
    return NextResponse.json({ result: "user created successfully", success: true }, { status: 201 })
}
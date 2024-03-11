import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request,res) {
    const data = users
    return NextResponse.json(data, { status: 200 })
}
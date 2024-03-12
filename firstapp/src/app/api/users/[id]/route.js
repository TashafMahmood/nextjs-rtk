import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, res) {
    const data = users
    const filterUser = data.filter(user => user.id == res.params.id);
    return NextResponse.json(filterUser.length == 0 ? { result: "No data found" } : { data: filterUser[0] }, { status: 200 })
}

export async function PUT(request, content) {
    let payload = await request.json();
    let id = await content.params.id
    payload.id = id
    console.log(payload.name)
    console.log(id)
    return NextResponse.json({ result: payload })
}

export function DELETE(request, content) {
    let id = content.params.id
    if (id) {
        return NextResponse.json({ result: "User deleted successfully", success: true }, { status: 200 })
    }
    return NextResponse.json({ result: "User not found", success: false }, { status: 400 })
}
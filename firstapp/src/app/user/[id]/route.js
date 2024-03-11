import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, res) {
    const data = users
    const filterUser = data.filter(user => user.id == res.params.id);
    return NextResponse.json(filterUser.length == 0 ? { result: "No data found" } : { filterUser }, { status: 200 })
}
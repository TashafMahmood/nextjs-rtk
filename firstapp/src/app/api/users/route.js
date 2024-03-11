import { NextResponse } from "next/server";

export function GET(request) {
    return NextResponse.json({ name: "tashaf", city:"Allahabad", age:28 },{status:200})
}
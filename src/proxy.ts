import { NextResponse, NextRequest } from "next/server";

export default async function proxy(req: NextRequest) {

    const username = req.cookies.get("username")?.value;
    const password = req.cookies.get("password")?.value;

    if (username !== "sandro" || password !== "105432") {
        return NextResponse.redirect(new URL("https://next-app-three-black.vercel.app/", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/contact/:path*",
    ]
}
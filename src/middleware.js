import { NextResponse } from "next/server";

export default function middleware(request) {
    const token = request.cookies.get('token');
    const urlLogin = new URL('/pages/login', request.url);

    if (!token) {
        if (request.nextUrl.pathname === '/pages/private') {
            return NextResponse.redirect(urlLogin);
          }
    }
    NextResponse.next();
};

export const config = {
    matcher: ["/", "/pages/private"]
};
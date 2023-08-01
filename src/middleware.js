import { NextResponse } from "next/server";

export default function middleware(Resquest) {
    const token = Resquest.cookies.get('token');
    const urlHome = new URL('/', Resquest.url);

    if (!token) {
        if (Resquest.nextUrl.pathname === '/pages/private') {
            return NextResponse.redirect(urlHome);
        }
    }
};

export const config = {
    matcher: ["/", "/pages/private"]
};
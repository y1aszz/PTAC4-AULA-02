import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";
export default function middleware(request) {
    const token = request.cookies.get('token');
    const urlLogin = new URL('/pages/login', request.url);
    const tokenValido = validateToken (token);


    if (!tokenValido || !token) {
        if (request.nextUrl.pathname === '/pages/private' || request.nextUrl.pathname ==='/pages/register'){ 
            return NextResponse.redirect(urlLogin);
          }
    }
    NextResponse.next();
};

export const config = {
    matcher: ["/", "/pages/private", "/pages/register"]
};



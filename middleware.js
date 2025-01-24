
import { getSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export function middleware(req) {
  const session = getSession(req);

  
  if (!session) {
    const loginUrl = new URL("/api/auth/login", req.url);
    loginUrl.searchParams.set("redirect_uri", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"], 
};

import { NextRequest, NextResponse } from "next/server";

export function middleware (request: NextRequest) {

  const authentication = true;
  if(request.nextUrl.pathname.startsWith('/posts') && !authentication) {
     return NextResponse.redirect(new URL('/',request.url)) 
  }
  return NextResponse.next();
}


//autentição para rotas
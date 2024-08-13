import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/studies/:path*", "/participants/:path*"],
};

export function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/not-found", req.url));
  }

  return NextResponse.next();
}

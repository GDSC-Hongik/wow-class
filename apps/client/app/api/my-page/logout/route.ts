import { cookieKey } from "constants/cookieKey";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = cookies();

  cookieStore.set(cookieKey["middleware-executed"], "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    expires: new Date(0),
    path: "/",
  });

  return NextResponse.json({ success: true });
}

import { dashboardApi } from "apis/auth/dashboardApi";
import { cookieKey } from "constants/cookieKey";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import setExpireTime from "utils/setExpireTime";

export const config = {
  matcher: ["/studies/:path*", "/participants/:path*"],
};

const middleware = async () => {
  const url =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? process.env.NEXT_PUBLIC_CLIENT_PROD_URL
      : process.env.NEXT_PUBLIC_CLIENT_DEV_URL;
  const cookieStore = cookies();
  const accessToken = cookieStore.get(cookieKey.accessToken)?.value;
  const cacheCookie = cookieStore.get(cookieKey["middleware-executed"]);

  if (!accessToken) {
    return NextResponse.redirect(new URL("/auth", url));
  }

  if (!cacheCookie) {
    try {
      const { manageRole, studyRole } = await dashboardApi.getDashboardInfo();
      if (studyRole === "STUDENT" && manageRole === "NONE") {
        return NextResponse.redirect(new URL("/auth", url));
      }
      const response = NextResponse.next();
      response.cookies.set(cookieKey["middleware-executed"], "true", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        expires: setExpireTime(1),
      });
      return response;
    } catch (error) {
      console.log("API 호출 오류 : ", error);
      return NextResponse.next();
    }
  }

  return NextResponse.next();
};

export default middleware;

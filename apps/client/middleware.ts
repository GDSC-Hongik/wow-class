import { dashboardApi } from "apis/dashboardApi";
import { cookieKey } from "constants/cookieKey";
import { routePath } from "constants/routePath";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/my-page/:path*", "/my-study/:path*", "/study-apply/:path*"],
};

const CACHE_COOKIE = "middleware-executed";

const middleware = async (req: NextRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(cookieKey.accessToken)?.value;
  const cacheCookie = cookieStore.get(CACHE_COOKIE);

  if (!cacheCookie) {
    try {
      const { memberRole } = await dashboardApi.getDashboardInfo();

      if (!accessToken || memberRole !== "REGULAR") {
        return NextResponse.redirect(new URL(routePath.auth, req.url));
      }

      const response = NextResponse.next();
      response.cookies.set(CACHE_COOKIE, "true", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
      });

      return response;
    } catch (error) {
      console.error("API 호출 오류:", error);

      return NextResponse.next();
    }
  }

  return NextResponse.next();
};

export default middleware;

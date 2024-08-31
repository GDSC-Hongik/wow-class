import { dashboardApi } from "apis/dashboardApi";
import { cookieKey } from "constants/cookieKey";
import { routePath } from "constants/routePath";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/my-page/:path*", "/my-study/:path*", "/study-apply/:path*"],
};

const middleware = async (req: NextRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(cookieKey.accessToken)?.value;
  const cacheCookie = cookieStore.get(cookieKey["middleware-executed"]);

  if (!accessToken) {
    return NextResponse.redirect(new URL(routePath.auth, req.url));
  }

  if (!cacheCookie) {
    const { memberRole } = await dashboardApi.getDashboardInfo();

    if (memberRole !== "REGULAR") {
      return NextResponse.redirect(new URL(routePath.auth, req.url));
    }

    const response = NextResponse.next();
    response.cookies.set(cookieKey["middleware-executed"], "true", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });

    return response;
  }

  return NextResponse.next();
};

export default middleware;

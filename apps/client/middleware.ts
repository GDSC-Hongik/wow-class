import { dashboardApi } from "apis/dashboardApi";
import { cookieKey } from "constants/cookieKey";
import { routePath } from "constants/routePath";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isMobileUser } from "utils/isMobileUser";

export const config = {
  matcher: [
    "/my-page/:path*",
    "/my-study/:path*",
    "/study-apply/:path*",
    "/mobile/:path*",
  ],
};

const middleware = async (req: NextRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(cookieKey.accessToken)?.value;
  const middlewareExecuted = cookieStore.get(cookieKey["middleware-executed"]);
  const userAgent = req.headers.get("user-agent") || "";
  const isMobile = isMobileUser(userAgent);

  const url = new URL(req.url);

  if (!accessToken) {
    return NextResponse.redirect(new URL(routePath.auth, req.url));
  }

  if (isMobile && (url.pathname === "/my-study" || url.pathname === "/auth")) {
    url.pathname = `/mobile/${url.pathname}`;
    return NextResponse.redirect(url);
  }

  if (!middlewareExecuted) {
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

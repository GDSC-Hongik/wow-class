import { dashboardApi } from "apis/auth/dashboardApi";
import { cookieKey } from "constants/cookieKey";
import { clientUrl } from "constants/url";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import setExpireTime from "utils/setExpireTime";
export const config = {
  matcher: ["/studies/:path*", "/students/:path*"],
};

const middleware = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(cookieKey.accessToken)?.value;
  const middlewareExecuted = cookieStore.get(
    cookieKey["admin-middleware-executed"]
  )?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/auth", clientUrl));
  }

  if (!middlewareExecuted) {
    try {
      const { manageRole, studyRole } = await dashboardApi.getDashboardInfo();
      if (studyRole === "STUDENT" && manageRole === "NONE") {
        return NextResponse.redirect(new URL("/auth", clientUrl));
      }
      const response = NextResponse.next();
      response.cookies.set(cookieKey["admin-middleware-executed"], "true", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
      });
      return response;
    } catch (error) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
};

export default middleware;

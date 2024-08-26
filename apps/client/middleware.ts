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

  const { memberRole } = await dashboardApi.getDashboardInfo();

  if (!accessToken || memberRole !== "REGULAR") {
    return NextResponse.redirect(new URL(routePath.auth, req.url));
  }

  return NextResponse.next();
};

export default middleware;

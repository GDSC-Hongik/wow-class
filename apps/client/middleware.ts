import { dashboardApi } from "apis/dashboardApi";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/my-page/:path*", "/my-study/:path*", "/study-apply/:path*"],
};

const middleware = async (req: NextRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  const { memberRole } = await dashboardApi.getDashboardInfo();

  if (!accessToken || memberRole !== "REGULAR") {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  return NextResponse.next();
};

export default middleware;

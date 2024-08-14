import { dashboardApi } from "apis/auth/dashboardApi";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/studies/:path*", "/participants/:path*"],
};

const middleware = async (req: NextRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/not-found", req.url));
  }

  const { studyRole, manageRole } = await dashboardApi.getDashboardInfo();

  if (studyRole !== "MENTOR" || manageRole !== "ADMIN") {
    const url =
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_PROD_URL
        : process.env.CLIENT_DEV_URL;

    return NextResponse.redirect(new URL("/auth", url));
  }
  const response = NextResponse.next();

  response.headers.set("Authorization", `Bearer ${accessToken}`);

  return response;
};

export default middleware;

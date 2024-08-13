import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import type { DashboardApiResponseDto } from "types/dto/auth";

const isAdmin = async () => {
  const { data } = await fetcher.get<DashboardApiResponseDto>(
    apiPath.dashboard
  );

  return data?.member.manageRole === "ADMIN";
};

export default isAdmin;

import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import type { DashboardApiResponseDto } from "types/dto/auth";

const isAdmin = async (): Promise<boolean> => {
  const { data } = await fetcher.get<DashboardApiResponseDto>(
    apiPath.dashboard
  );
  if (data) return data?.member.manageRole === "ADMIN";
  else return false;
};

export default isAdmin;

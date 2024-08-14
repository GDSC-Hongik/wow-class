import { dashboardApi } from "apis/auth/dashboardApi";

const isAdmin = async (): Promise<boolean> => {
  const { manageRole } = await dashboardApi.getDashboardInfo();
  return manageRole === "ADMIN";
};

export default isAdmin;

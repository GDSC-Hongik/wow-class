import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import type { User } from "types/user";

const isAdmin = async () => {
  const { data } = await fetcher.get<User>(apiPath.dashboard);

  return data?.manageRole === "ADMIN";
};

export default isAdmin;

import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import type { User } from "types/user";

const isMentor = async () => {
  await fetcher.get<User>(apiPath.dashboard, {
    credentials: "include",
  });
};

export default isMentor;

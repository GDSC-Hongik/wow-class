import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";

export const authApi = {
  logout: async () => {
    const response = await fetcher.get(apiPath.logout);

    return { success: response.ok };
  },
};

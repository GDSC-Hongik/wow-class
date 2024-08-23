import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { MyAccountInfoDto } from "types/dtos/members";

export const membersApi = {
  getMyAccountInfo: async () => {
    const response = await fetcher.get<MyAccountInfoDto>(
      `${apiPath.members}/me/account-info`,
      {
        next: { tags: [tags.myAccountInfo] },
        cache: "force-cache",
      }
    );

    return response.data;
  },
};

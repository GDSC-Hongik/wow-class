import { fetcher } from "@wow-class/utils";
import type { User } from "types/user";

const isMentor = async () => {
  const response = await fetcher
    .get<User>("/onboarding/members/me/dashboard", {
      credentials: "include",
    })
    .then((response) => {
      console.log(response.data?.studyRole);
    });
};

export default isMentor;

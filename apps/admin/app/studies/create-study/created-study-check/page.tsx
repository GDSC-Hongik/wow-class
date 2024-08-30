import { routerPath } from "constants/router/routerPath";
import { redirect } from "next/navigation";

const CreatedStudyCheckPage = () => {
  return redirect(routerPath.root.href);
};

export default CreatedStudyCheckPage;

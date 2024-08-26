import { routerPath } from "constants/router/routerPath";
import { redirect } from "next/navigation";

const StudyDetailInfoCheckPage = () => {
  return redirect(routerPath.root.href);
};

export default StudyDetailInfoCheckPage;

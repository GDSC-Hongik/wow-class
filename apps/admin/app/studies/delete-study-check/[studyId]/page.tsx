import { routerPath } from "constants/router/routerPath";
import { redirect } from "next/navigation";

const DeleteStudyCheckPage = () => {
  return redirect(routerPath.root.href);
};

export default DeleteStudyCheckPage;

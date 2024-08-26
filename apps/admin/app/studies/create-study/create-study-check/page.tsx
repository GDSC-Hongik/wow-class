import { routerPath } from "constants/router/routerPath";
import { redirect } from "next/navigation";

const CreateStudyCheckPage = () => {
  return redirect(routerPath.root.href);
};

export default CreateStudyCheckPage;

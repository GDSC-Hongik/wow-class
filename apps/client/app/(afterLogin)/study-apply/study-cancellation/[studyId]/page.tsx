import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

const StudyCancelPage = () => {
  return redirect(routePath["study-apply"]);
};

export default StudyCancelPage;

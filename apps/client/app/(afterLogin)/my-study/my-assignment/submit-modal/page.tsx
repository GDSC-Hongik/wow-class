import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

const SubmitConfirmModalPage = () => {
  return redirect(routePath["my-assignment"]);
};

export default SubmitConfirmModalPage;

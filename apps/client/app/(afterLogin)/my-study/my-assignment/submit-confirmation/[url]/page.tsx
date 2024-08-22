import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

const SubmitConfirmPage = () => {
  return redirect(routePath["my-assignment"]);
};

export default SubmitConfirmPage;

import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

const CancelModalPage = () => {
  return redirect(routePath["study-apply"]);
};

export default CancelModalPage;

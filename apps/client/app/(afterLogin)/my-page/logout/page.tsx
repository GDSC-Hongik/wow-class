import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

const LogoutPage = () => {
  return redirect(routePath["my-page"]);
};

export default LogoutPage;

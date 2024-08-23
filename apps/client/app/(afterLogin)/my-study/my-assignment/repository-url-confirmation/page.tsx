import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

const RepositoryUrlConfirmationPage = () => {
  return redirect(routePath["my-assignment"]);
};

export default RepositoryUrlConfirmationPage;

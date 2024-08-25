import { routerPath } from "constants/router/routerPath";
import { redirect } from "next/navigation";
const AnnouncementModifyPage = () => {
  return redirect(routerPath.root.href);
};

export default AnnouncementModifyPage;

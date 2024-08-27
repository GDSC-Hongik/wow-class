import { routerPath } from "constants/router/routerPath";
import { redirect } from "next/navigation";

const AnnouncementDeletePage = () => {
  return redirect(routerPath.root.href);
};

export default AnnouncementDeletePage;

import { studyApi } from "apis/study/studyApi";
import { useEffect, useState } from "react";
const usePrefillAnnouncement = (studyId: number, studyAnnounceId: number) => {
  const [prefillAnnouncement, setPrefillAnnouncement] = useState({
    link: "",
    title: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const announcementList = await studyApi.getStudyAnnouncement(studyId);
      const prefillData = announcementList?.filter(
        (data) => data.studyAnnouncement.studyAnnouncementId === studyAnnounceId
      )[0];
      if (prefillData) {
        setPrefillAnnouncement({
          title: prefillData.studyAnnouncement.title,
          link: prefillData.studyAnnouncement.link,
        });
      }
    };
    fetchData();
  }, [studyId, studyAnnounceId]);
  return prefillAnnouncement;
};

export default usePrefillAnnouncement;

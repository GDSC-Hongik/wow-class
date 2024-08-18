import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { formatISODateWithDot } from "@wow-class/utils";
import Link from "next/link";
import { color } from "wowds-tokens";

const mockData = [
  {
    studyAnnounceId: 0,
    title: "2주차 과제 검사 결과 안내",
    link: "",
    createdDate: "2024-08-18T17:13:29.913Z",
  },
  {
    studyAnnounceId: 1,
    title: "1주차 실습",
    link: "",
    createdDate: "2024-08-18T17:13:29.913Z",
  },
];

const StudyNotices = () => {
  return (
    <section aria-label="study-notices">
      <Text as="h2" className={studyNoticeHeadingStyle} typo="h2">
        스터디 공지
      </Text>
      {mockData.map(({ studyAnnounceId, title, link, createdDate }, index) => (
        <Link
          className={studyNoticeBoxStyle}
          href={link}
          key={studyAnnounceId}
          style={{
            backgroundColor:
              index === 0 ? `${color.monoBackgroundPressed}` : "white",
          }}
        >
          <Text as="h3" typo="h3">
            {title}
          </Text>
          <Text as="h3" typo="h3">
            {formatISODateWithDot(createdDate)}
          </Text>
        </Link>
      ))}
    </section>
  );
};

export default StudyNotices;

const studyNoticeHeadingStyle = css({
  marginBottom: "md",
});

const studyNoticeBoxStyle = css({
  alignItems: "center",
  borderRadius: "4px",
  height: "80px",
  padding: "0 47px 0 20px",
  display: "flex",
  justifyContent: "space-between",
});

import { Space, Text } from "@wow-class/ui";
const StudyStatics = ({ studyId }: { studyId: string }) => {
  return (
    <section aria-label="study-statics">
      <Text typo="h2">스터디 통계</Text>
      <Space height={24} />
    </section>
  );
};

export default StudyStatics;

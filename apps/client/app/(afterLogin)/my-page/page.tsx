import { Space, Text } from "@wow-class/ui";

import { CompletedStudy } from "./_components/CompletedStudy";
import { MyInfoBox } from "./_components/MyInfoBox";

const MyPage = () => {
  return (
    <>
      <Text typo="h1">마이 페이지</Text>
      <Space height={16} />
      <MyInfoBox />
      <Space height={64} />
      <CompletedStudy />
      <div>sdf</div>
    </>
  );
};

export default MyPage;

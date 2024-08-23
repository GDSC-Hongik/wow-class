import { Space, Text } from "@wow-class/ui";

import { MyInfoBox } from "./_components/MyInfoBox";

const MyPage = () => {
  return (
    <>
      <Text typo="h1">마이 페이지</Text>
      <Space height={16} />
      <MyInfoBox />
    </>
  );
};

export default MyPage;

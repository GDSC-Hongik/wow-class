import { styled } from "@styled-system/jsx";
import { Button, Text } from "@wow-class/ui";

const Home = () => {
  return (
    <div>
      Home
      <Button appName="admin">버튼</Button>
      <styled.div color="blue.100">sdf</styled.div>
      <styled.div color="yellow.500">sdf</styled.div>
      <Text color="primary" typo="h1">
        헤딩1
      </Text>
    </div>
  );
};

export default Home;

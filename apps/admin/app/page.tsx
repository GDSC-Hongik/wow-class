import { styled } from "@styled-system/jsx";
import { Button, Text } from "@wow-class/ui";

const Home = () => {
  return (
    <div>
      Home
      <Button appName="admin">버튼</Button>
      <styled.div color="red.300">sdf</styled.div>
      <styled.div color="mono.100">sdf</styled.div>
      <Text color="error" typo="h1">
        헤딩1
      </Text>
    </div>
  );
};

export default Home;

import { styled } from "@styled-system/jsx";
import { Button } from "@wow-class/ui";

const Home = () => {
  return (
    <div>
      Home
      <Button appName="admin">버튼</Button>
      <styled.div color="blue.100">sdf</styled.div>
      <styled.div color="yellow.500">sdf</styled.div>
    </div>
  );
};

export default Home;

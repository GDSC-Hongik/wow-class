import { styled } from "@styled-system/jsx";
import { Button } from "@wow-class/ui/button";

const Home = () => {
  return (
    <div>
      Home
      <Button appName="admin">버튼</Button>
      <styled.div color="red.300">sdf</styled.div>
    </div>
  );
};

export default Home;

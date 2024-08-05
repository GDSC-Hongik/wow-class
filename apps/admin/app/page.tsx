import { styled } from "@styled-system/jsx";
import { Button } from "@wow-class/ui/components";

const Home = () => {
  return (
    <div>
      Home
      <Button appName="admin">버튼</Button>
      <styled.div color="red.300">sdf</styled.div>
      <styled.div color="mono.100">sdf</styled.div>
    </div>
  );
};

export default Home;

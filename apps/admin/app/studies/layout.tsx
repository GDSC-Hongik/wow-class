import { Flex, styled } from "@styled-system/jsx";
import Navbar from "components/Navbar";
const StudiesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <styled.div height="100vh" padding="54px 101px" width="100%">
        <Flex direction="column" gap="sm" height="100%" width="100%">
          {children}
        </Flex>
      </styled.div>
    </>
  );
};

export default StudiesLayout;

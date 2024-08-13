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
      <styled.div padding="54px 101px" width="100%">
        <Flex direction="column" gap="sm" width="100%">
          {children}
        </Flex>
      </styled.div>
    </>
  );
};

export default StudiesLayout;

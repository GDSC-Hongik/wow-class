import { Flex, styled } from "@styled-system/jsx";
const StudiesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <styled.div padding="54px 101px" width="100%">
      <Flex direction="column" gap="sm" width="100%">
        {children}
      </Flex>
    </styled.div>
  );
};

export default StudiesLayout;

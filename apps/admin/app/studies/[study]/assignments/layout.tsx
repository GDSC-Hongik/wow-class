import { Flex } from "@styled-system/jsx";

const AssignmentsLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <Flex
      direction="column"
      gap="3rem"
      paddingX="6.25rem"
      paddingY="3rem"
      width="100%"
    >
      {children}
      {modal}
    </Flex>
  );
};

export default AssignmentsLayout;

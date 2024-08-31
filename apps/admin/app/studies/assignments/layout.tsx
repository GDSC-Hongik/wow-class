import { Flex } from "@styled-system/jsx";

const AssignmentsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Flex direction="column" gap="3rem" width="100%">
      {children}
    </Flex>
  );
};

export default AssignmentsLayout;

import { styled } from "@styled-system/jsx";

const CreateStudyLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <styled.div padding="54px 101px" width="100%">
      {children}
    </styled.div>
  );
};

export default CreateStudyLayout;

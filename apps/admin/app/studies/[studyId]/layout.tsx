const StudyLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default StudyLayout;

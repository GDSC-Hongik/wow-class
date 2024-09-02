const StudyLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <main style={MainLayoutStyle}>
      {children}
      {modal}
    </main>
  );
};

const MainLayoutStyle = {
  height: "100%",
  overflow: "auto",
};

export default StudyLayout;

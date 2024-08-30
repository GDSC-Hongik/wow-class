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

export default StudyLayout;

const MainLayoutStyle = {
  height: "100vh",
  overflow: "auto",
};

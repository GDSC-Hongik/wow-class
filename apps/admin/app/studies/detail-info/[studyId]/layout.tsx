const StudyDetailInfoLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main style={MainLayoutStyle}>{children}</main>;
};

const MainLayoutStyle = {
  height: "100vh",
  overflow: "auto",
};

export default StudyDetailInfoLayout;

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <main>
      {children}
      {modal}
    </main>
  );
};

export default Layout;

import { css } from "@styled-system/css";

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <main className={layoutContainerStyle}>
      {children}
      {modal}
    </main>
  );
};

export default Layout;

const layoutContainerStyle = css({
  height: "100%",
});

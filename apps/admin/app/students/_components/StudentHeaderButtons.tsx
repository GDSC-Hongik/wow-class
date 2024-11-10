import OutstandingDropDown from "./OutstandingDropDown";

const StudentsHeaderButtons = () => {
  return (
    <>
      <OutstandingDropDown type="ADD" />
      <OutstandingDropDown type="DEL" />
    </>
  );
};

export default StudentsHeaderButtons;

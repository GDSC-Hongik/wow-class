import { css } from "@styled-system/css";
const StudyNameTextField = () => {
  return <textarea className={TextFieldStyle} placeholder="새로운 스터디" />;
};

export default StudyNameTextField;

const TextFieldStyle = css({
  width: "250px",
  border: "none",
  color: "lightDisabled",
  textStyle: "h1",
});

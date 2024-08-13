import { styled } from "@styled-system/jsx";
import { Table } from "components/study-apply/Table";

const StudyApply = () => {
  return (
    <>
      <styled.p color="textBlack" textStyle="h1">
        신청 가능한 스터디
      </styled.p>
      <div style={{ height: "19px" }} />
      <Table />
      <Table />
      <Table />
    </>
  );
};

export default StudyApply;

import { styled } from "@styled-system/jsx";

import { Table } from "./Table";

export const HomeworkHistory = () => {
  return (
    <>
      <styled.div textStyle="h2">과제 히스토리</styled.div>
      <styled.div color="sub" textStyle="body1">
        지난 과제의 제출 내역을 확인해요.
      </styled.div>
      <div style={{ height: "1.5rem" }} />
      <Table />
      <Table />
      <Table />
    </>
  );
};

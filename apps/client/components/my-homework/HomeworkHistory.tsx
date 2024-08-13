import { styled } from "@styled-system/jsx";

import { Table } from "./Table";

export const HomeworkHistory = () => {
  return (
    <>
      <styled.h2 textStyle="h2">과제 히스토리</styled.h2>
      <styled.div color="sub" textStyle="body1">
        지난 과제의 제출 내역을 확인해요.
      </styled.div>
      <div style={{ height: "24px" }} />
      <Table />
      <Table />
      <Table />
    </>
  );
};

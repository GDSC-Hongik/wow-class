import { css } from "@styled-system/css";

export const Description = () => {
  return (
    <p>
      제출 완료하기 버튼을 누르면 등록한{" "}
      <span className={nonCursorStyle}>GitHub 레포지토리</span>
      의 main 브랜치에서 가장 최신 상태의 wil.md 파일이 제출돼요. <br />
      과제는 기한 내에 여러 번 제출할 수 있으나, 가장 마지막 제출만 최종 제출로
      인정해요.
    </p>
  );
};

const nonCursorStyle = css({
  color: "blueHover",
  cursor: "auto",
  textDecoration: "none",
});

import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import Popover from "components/Popover";
import type { SubmissionFailureType } from "types/entities/common/assignment";
import { Help as HelpIcon } from "wowds-icons";

interface FailurePopoverProps {
  submissionFailureType: SubmissionFailureType;
}
export const FailurePopover = ({
  submissionFailureType,
}: FailurePopoverProps) => {
  if (
    submissionFailureType === "NONE" ||
    submissionFailureType === "NOT_SUBMITTED"
  )
    return null;
  return (
    <Popover
      triggerContent={<HelpIcon fill="sub" stroke="sub" style={iconStyle} />}
    >
      <Flex direction="column" gap="xs">
        <Text color="textWhite" typo="body3">
          {submissionFailureType === "WORD_COUNT_INSUFFICIENT" &&
            "Q. 글자수가 부족하다고 나와요."}
          {submissionFailureType === "LOCATION_UNIDENTIFIABLE" &&
            'Q. "위치 확인 불가" 라고 나와요.'}
        </Text>
        <Text as="div" color="outline" typo="body3">
          {submissionFailureType === "LOCATION_UNIDENTIFIABLE" && (
            <>
              아래 조건에 맞게 wil.md 파일을 제출했는지 확인해주세요. <br />
              <br />
              <ul style={ulStyle}>
                <li>본인의 레포지터리가 맞는지</li>
                <li>제출한 브랜치 이름이 main인지</li>
                <li>파일 위치가 `weekn/wil.md` 가 맞는지</li>
                <li>커밋 후 원격 저장소에 push까지 완료했는지</li>
              </ul>
              <br />
              <br />
              커밋 후 원격 저장소에 push까지 완료했는지 제대로 제출한 후에도
              계속 "경로 확인 불가"라고 나온다면,GDSC Hongik 카카오톡 채널로
              문의해주세요.
            </>
          )}
          {submissionFailureType === "WORD_COUNT_INSUFFICIENT" && (
            <p>
              wil.md 파일에 배운 내용을 최소 300자 이상 작성해야 해요. <br />
              <br />
              제대로 제출한 후에도 계속 글자수가 부족하다고 나온다면,
              <br />
              GDSC Hongik 카카오톡 채널로 문의해주세요.
            </p>
          )}
        </Text>
      </Flex>
    </Popover>
  );
};

const iconStyle = {
  cursor: "pointer",
};

const ulStyle = {
  listStyleType: "disc",
  paddingLeft: "15px",
};

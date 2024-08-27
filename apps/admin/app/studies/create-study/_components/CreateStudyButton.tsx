import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { routerPath } from "constants/router/routerPath";
import Link from "next/link";
import isAdmin from "utils/isAdmin";
import { Plus } from "wowds-icons";

const CreateStudyButton = async () => {
  const adminStatus = await isAdmin();

  if (!adminStatus) return null;

  return (
    <Link href={routerPath.createStudy.href}>
      <button className={createStudyButtonStyle}>
        <Flex gap="xs">
          <Text color="sub" typo="label1">
            새로운 스터디 개설하기
          </Text>
          <div className={PlusIconStyle}>
            <Plus height={14} width={14} />
          </div>
        </Flex>
      </button>
    </Link>
  );
};

export default CreateStudyButton;

const createStudyButtonStyle = css({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  borderRadius: "md",
  borderStyle: "dashed",
  borderWidth: "1px",
  borderColor: "outline",
  padding: "32px",
  _hover: {
    backgroundColor: "backgroundAlternative",
    borderWidth: "0px",
    cursor: "pointer",
  },
});

const PlusIconStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20px",
  height: "20px",
  borderRadius: "full",
  backgroundColor: "primary",
  color: "white",
});

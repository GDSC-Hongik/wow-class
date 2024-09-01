import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Checkbox from "wowds-ui/Checkbox";

const StudyInfoStatus = ({ index }: { index: number }) => {
  const { control, setValue, watch } = useFormContext();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setValue(
      `studyCurriculums.${index}.status`,
      checked ? "CANCELLED" : "NONE"
    );
  }, [checked]);

  return (
    <div className={CurriculumCancelTimeStyle}>
      <Text color="sub" typo="body1">
        휴강 주차
      </Text>
      <Controller
        control={control}
        defaultValue="NONE"
        name={`studyCurriculums.${index}.status`}
        render={() => (
          <Checkbox
            checked={watch(`studyCurriculums.${index}.status`) === "CANCELLED"}
            defaultChecked={false}
            onChange={() => setChecked(!checked)}
          />
        )}
      />
    </div>
  );
};

export default StudyInfoStatus;

const CurriculumCancelTimeStyle = css({
  flex: 1,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "xs",
  gap: "xs",
});

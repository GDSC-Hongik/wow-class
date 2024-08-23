import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { Controller, useFormContext } from "react-hook-form";
import Checkbox from "wowds-ui/Checkbox";

const StudyInfoStatus = ({ index }: { index: number }) => {
  const { control } = useFormContext();
  return (
    <div className={CurriculumCancelTimeStyle}>
      <Text color="sub" typo="body1">
        휴강 주차
      </Text>
      <Controller
        control={control}
        name={`studySessions.${index}.status`}
        render={({ field }) => (
          <Checkbox
            {...field}
            checked={field.value}
            defaultChecked={false}
            onClick={() => field.onChange(!field.value)}
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

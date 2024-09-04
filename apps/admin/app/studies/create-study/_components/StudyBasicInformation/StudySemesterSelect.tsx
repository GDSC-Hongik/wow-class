import { Flex } from "@styled-system/jsx";
import { useFormContext } from "react-hook-form";
import TextField from "wowds-ui/TextField";

const StudySemesterSelect = () => {
  const { setValue } = useFormContext();

  return (
    <Flex alignItems="center" gap={36} width="100%">
      <TextField
        label="진행연도"
        placeholder="Ex.2024"
        style={{ width: "358px" }}
        onChange={(value) => {
          setValue("academicYear", parseInt(value), {
            shouldValidate: true,
          });
        }}
      />
      <TextField
        label="진행학기"
        placeholder="Ex.1학기"
        style={{ width: "358px" }}
        onChange={(value) => {
          const semesterValue = parseInt(value.slice(0, 1), 10);
          setValue("semesterType", semesterValue === 1 ? "FIRST" : "SECOND", {
            shouldValidate: true,
          });
        }}
      />
    </Flex>
  );
};

export default StudySemesterSelect;

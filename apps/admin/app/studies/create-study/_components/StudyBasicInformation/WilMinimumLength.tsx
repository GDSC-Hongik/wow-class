import { Controller, useFormContext } from "react-hook-form";
import TextField from "wowds-ui/TextField";

const WilMinimumLength = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="minAssignmentLength"
      render={({ field }) => (
        <TextField
          {...field}
          label="WIL 최소 글자 수 제한"
          placeholder="ex) 300"
          style={{ width: 358 }}
        />
      )}
    />
  );
};

export default WilMinimumLength;

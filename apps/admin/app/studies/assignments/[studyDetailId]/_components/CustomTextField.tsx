import { useController } from "react-hook-form";
import type { TextFieldProps } from "wowds-ui/TextField";
import TextField from "wowds-ui/TextField";

interface CustomTextFieldProps extends TextFieldProps {
  name: string;
  control: any;
}

// TODO: defaultValue 적용 안되는 문제
const CustomTextField = ({
  name,
  control,
  defaultValue,
  ...rest
}: CustomTextFieldProps) => {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue,
  });

  return (
    <TextField
      defaultValue={defaultValue}
      ref={field.ref}
      value={field.value}
      onBlur={field.onBlur}
      onChange={field.onChange}
      {...rest}
    />
  );
};

export default CustomTextField;

"use client";

import { useController } from "react-hook-form";
import type { TextFieldProps } from "wowds-ui/TextField";
import TextField from "wowds-ui/TextField";

interface CustomTextFieldProps extends TextFieldProps {
  name: string;
  control: any;
}

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

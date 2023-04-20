import { TextField, TextFieldProps } from '@mui/material';
import { CSSProperties, FC } from 'react';
import { useFormContext, Controller, Control, FieldValues, RegisterOptions } from 'react-hook-form';

type TextInputProps = {
  name: keyof FieldValues;
  label: string;
  placeholder?: string;
  rules?: RegisterOptions;
  style?: CSSProperties;
  helperText?: string;
  control: Control<FieldValues>;
  type?: string;
} & Omit<TextFieldProps, 'helperText'>;

export const TextInput: FC<TextInputProps> = ({
  name,
  label,
  placeholder,
  rules,
  style,
  helperText,
  control,
  type = 'text',
  ...rest
}) => {
  const {
    formState: { errors }
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        const { ref, onChange, onBlur, value } = field;
        return (
          <TextField
            inputRef={ref}
            label={label}
            type={type}
            placeholder={placeholder}
            variant='outlined'
            error={!!errors[name]}
            helperText={helperText || errors[name]?.message?.toString()}
            fullWidth
            onChange={(event) => onChange(event.target.value)}
            onBlur={onBlur}
            value={value}
            {...rest}
          />
        );
      }}
    />
  );
};

import { TextField, TextFieldProps } from '@mui/material';
import { CSSProperties, FC } from 'react';
import { Controller, Control, FieldValues, RegisterOptions } from 'react-hook-form';

type TextInputProps = {
  name: keyof FieldValues;
  label: string;
  type?: string;
  placeholder?: string;
  style?: CSSProperties;
  helperText?: string;
  control: Control<FieldValues>;
  rules?: RegisterOptions<FieldValues>;
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
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        return (
          <TextField
            label={label}
            type={type}
            placeholder={placeholder}
            variant='outlined'
            error={!!error}
            helperText={helperText || error?.message}
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

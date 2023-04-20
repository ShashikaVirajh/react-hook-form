import { MenuItem, Select } from '@mui/material';
import { CSSProperties, FC } from 'react';
import { Controller, Control, FieldValues, RegisterOptions } from 'react-hook-form';

export const DropdownInput: FC<DropdownInputProps> = ({
  name,
  label,
  options,
  rules,
  style,
  control,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        return (
          <Select
            label={label}
            value={value}
            variant='outlined'
            fullWidth
            onChange={(event) => onChange(event.target.value)}
            style={{ ...style }}
            {...rest}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        );
      }}
    />
  );
};

type DropdownInputProps = {
  name: keyof FieldValues;
  label: string;
  options: Option[];
  style?: CSSProperties;
  control: Control<FieldValues>;
  rules?: RegisterOptions<FieldValues>;
};

type Option = {
  label: string;
  value: string | number;
};

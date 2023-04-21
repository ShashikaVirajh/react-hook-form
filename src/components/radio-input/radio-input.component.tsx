import { Box, Radio, Typography } from '@mui/material';
import { CSSProperties, FC } from 'react';
import { Controller, Control, FieldValues, RegisterOptions } from 'react-hook-form';

export const RadioInput: FC<RadioButtonInputProps> = ({
  name,
  label,
  control,
  style,
  value,
  rules,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value: fieldValue }, fieldState: { error } }) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            ml: '-0.75rem'
          }}
        >
          <Radio
            color='warning'
            style={style}
            onChange={() => onChange(value)}
            checked={fieldValue === value}
            {...rest}
          />

          <Typography variant='body2'>{label}</Typography>
        </Box>
      )}
    />
  );
};

type RadioButtonInputProps = {
  name: keyof FieldValues;
  label: string;
  value: string;
  style?: CSSProperties;
  control: Control<FieldValues>;
  rules?: RegisterOptions<FieldValues>;
};

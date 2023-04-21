import { Box, Checkbox, Typography } from '@mui/material';
import { CSSProperties, ChangeEvent, FC } from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';

export const CheckBoxInput: FC<CheckBoxInputProps> = ({
  name,
  label,
  control,
  style,
  checked = false,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            ml: '-0.75rem'
          }}
        >
          <Checkbox
            color='warning'
            style={style}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
            checked={value}
            {...rest}
          />

          <Typography variant='body2'>{label}</Typography>
        </Box>
      )}
    />
  );
};

type CheckBoxInputProps = {
  name: keyof FieldValues;
  label: string;
  checked?: boolean;
  style?: CSSProperties;
  control: Control<FieldValues>;
};

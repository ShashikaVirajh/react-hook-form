import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  options: Option[];
  label: string;
};

export const InputDropdown: FC<Props> = ({ name, options, label }) => {
  const { control } = useFormContext();

  return (
    <FormControl variant='outlined' fullWidth>
      <InputLabel>{label}</InputLabel>

      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Select {...field} label={label}>
            <MenuItem value=''>{label}</MenuItem>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

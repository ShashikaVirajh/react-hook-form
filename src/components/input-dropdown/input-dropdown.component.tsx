import { MenuItem, Select } from '@mui/material';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  options: Option[];
  label?: string;
};

export const InputDropdown: FC<Props> = ({ name, options, label }) => {
  const { register } = useFormContext();

  return (
    <Select {...register(name)} variant='outlined' fullWidth>
      <MenuItem value=''>{label}</MenuItem>

      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

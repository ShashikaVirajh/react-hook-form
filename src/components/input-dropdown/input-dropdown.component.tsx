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
  defaultValue?: string;
};

export const InputDropdown: FC<Props> = ({ name, options, defaultValue }) => {
  const { register } = useFormContext();

  return (
    <Select {...register('sport')} variant='outlined' fullWidth defaultValue={defaultValue}>
      <MenuItem value='0'>{defaultValue}</MenuItem>

      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

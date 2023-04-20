import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { TextInput } from './components/text-input/text-input.component';
import { DropdownInput } from './components/dropdown-input/dropdown-input.component';

const COUNTRIES = [
  { label: 'Sri Lanka', value: 'SL' },
  { label: 'New Zealand', value: 'NZ' },
  { label: 'United States', value: 'US' },
  { label: 'Australia', value: 'AU' },
  { label: 'England', value: 'ENG' }
];

export const App: FC = () => {
  const formData = {
    firstName: '',
    lastName: '',
    country: COUNTRIES[0].value
  };

  const { control, formState, handleSubmit, getValues } = useForm<FieldValues>({
    defaultValues: formData
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('firstName: ' + data.firstName);
    console.log('lastName: ' + data.lastName);
    console.log('country: ' + data.country);

    console.log(getValues());
  };

  const firstNameRules = {
    required: { value: true, message: 'First Name is required' },
    minLength: { value: 2, message: 'First Name must be at least 2 characters long' },
    maxLength: { value: 20, message: 'First Name must be at most 20 characters long' }
  };

  const lastNameRules = {
    required: { value: true, message: 'Last Name is required' },
    minLength: { value: 4, message: 'Last Name must be at least 4 characters long' },
    maxLength: { value: 20, message: 'Last Name must be at most 20 characters long' }
  };

  const countryRules = {
    required: { value: true, message: 'Country is required' }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Box marginTop='4rem' width='20%'>
          <TextInput
            name='firstName'
            control={control}
            label='First Name'
            rules={firstNameRules}
            style={{ marginBottom: '1.5rem' }}
          />

          <TextInput
            name='lastName'
            control={control}
            label='Last Name'
            rules={lastNameRules}
            style={{ marginBottom: '1.5rem' }}
          />

          <DropdownInput
            name='country'
            label='Select Country'
            options={COUNTRIES}
            control={control}
            rules={countryRules}
          />

          <Button type='submit' disabled={formState.isSubmitting}>
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

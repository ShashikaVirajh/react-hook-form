import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { TextInput } from './components/text-input/text-input.component';
import { DropdownInput } from './components/dropdown-input/dropdown-input.component';
import { CheckBoxInput } from './components/checkbox-input/checkbox.component';
import { RadioInput } from './components/radio-input/radio-input.component';

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
    country: '',
    agreement: false
  };

  const { control, handleSubmit, formState, getValues } = useForm<FieldValues>({
    defaultValues: formData
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('firstName: ' + data.firstName);
    console.log('lastName: ' + data.lastName);
    console.log('country: ' + data.country);
    console.log('gender: ' + data.gender);
    console.log('agreement: ' + data.agreement);

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

  const genderRules = {
    required: { value: true, message: 'Gender is required' }
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

          <Box display='flex' my='1rem' flexDirection='row' justifyContent='space-between'>
            <RadioInput
              name='gender'
              control={control}
              label='Male'
              value='male'
              rules={genderRules}
            />
            <RadioInput
              name='gender'
              control={control}
              label='Female'
              value='female'
              rules={genderRules}
            />
          </Box>

          <CheckBoxInput name='agreement' label='Accept the agreement' control={control} />

          <Button
            type='submit'
            variant='outlined'
            fullWidth
            sx={{ mt: '1rem' }}
            disabled={formState.isSubmitting}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

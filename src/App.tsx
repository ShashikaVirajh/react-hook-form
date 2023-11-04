import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, Stack } from '@mui/material';
import { FC } from 'react';
import { TextInput } from './components/text-input/text-input.component';
import { CheckBoxInput } from './components/checkbox-input/checkbox.component';
import { RadioInput } from './components/radio-input/radio-input.component';
import { InputDropdown } from './components/input-dropdown/input-dropdown.component';

export const App: FC = () => {
  const formData = {
    firstName: '',
    lastName: '',
    country: '',
    sport: '',
    agreement: false
  };

  const methods = useForm<FieldValues>({
    defaultValues: formData
  });

  console.log('form-values:', methods.watch());

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('firstName: ' + data.firstName);
    console.log('lastName: ' + data.lastName);
    console.log('country: ' + data.country);
    console.log('sport: ' + data.sport);
    console.log('gender: ' + data.gender);
    console.log('agreement: ' + data.agreement);

    console.log(methods.getValues());
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

  const genderRules = {
    required: { value: true, message: 'Gender is required' }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box>
          <Stack alignItems='center'>
            <Stack width='20rem'>
              <TextInput
                name='firstName'
                control={methods.control}
                label='First Name'
                rules={firstNameRules}
                style={{ marginBottom: '1.5rem' }}
              />
            </Stack>

            <Stack width='20rem'>
              <TextInput
                name='lastName'
                control={methods.control}
                label='Last Name'
                rules={lastNameRules}
                style={{ marginBottom: '1.5rem' }}
              />
            </Stack>

            <Stack width='20rem' mb={3}>
              <InputDropdown name='sport' options={SPORTS} label='Select Sport' />
            </Stack>

            <Stack width='20rem' mb={3}>
              <InputDropdown name='country' options={COUNTRIES} label='Select Country' />
            </Stack>

            <Stack width='20rem' direction='row' justifyContent='space-between'>
              <RadioInput
                name='gender'
                control={methods.control}
                label='Male'
                value='male'
                rules={genderRules}
              />
              <RadioInput
                name='gender'
                control={methods.control}
                label='Female'
                value='female'
                rules={genderRules}
              />
            </Stack>

            <Stack width='20rem'>
              <CheckBoxInput
                name='agreement'
                label='Accept the agreement'
                control={methods.control}
              />
            </Stack>

            <Stack width='20rem'>
              <Button
                type='submit'
                variant='outlined'
                fullWidth
                sx={{ mt: '1rem' }}
                disabled={methods.formState.isSubmitting}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </form>
    </FormProvider>
  );
};

const COUNTRIES = [
  { label: 'Sri Lanka', value: 'SL' },
  { label: 'New Zealand', value: 'NZ' },
  { label: 'United States', value: 'US' },
  { label: 'Australia', value: 'AU' },
  { label: 'South Africa', value: 'SA' }
];

const SPORTS = [
  { label: 'Football', value: 'FB' },
  { label: 'Rugby', value: 'RG' },
  { label: 'Cricket', value: 'CK' },
  { label: 'Hockey', value: 'HK' },
  { label: 'Volleyball', value: 'VB' }
];

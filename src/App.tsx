import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { FC } from 'react';
import { TextInput } from './components/text-input/text-input.component';

export const App: FC = () => {
  const formData = {
    username: '',
    password: ''
  };

  const { control, formState, handleSubmit } = useForm<FieldValues>({ defaultValues: formData });

  console.log(control);

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  };

  const usernameRules = {
    required: { value: true, message: 'Username is required' }
  };

  const passwordRules = {
    required: { value: true, message: 'Password is required' },
    minLength: { value: 6, message: 'Password must be at least 6 characters long' },
    maxLength: { value: 20, message: 'Password must be at most 20 characters long' }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput name='username' control={control} label='Username' rules={usernameRules} />

      <TextInput
        name='password'
        control={control}
        label='Password'
        type='password'
        rules={passwordRules}
      />

      <Button type='submit' disabled={formState.isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

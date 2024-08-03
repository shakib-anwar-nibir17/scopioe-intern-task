import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { Button } from '../../../Components/buttons/button';
import { Input } from '../../../Components/inputs/Input';
import { Text } from '../../../Components/text/Text';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  const onError = (errors) => {
    Object.keys(errors).forEach((field) => {
      toast.error(errors[field].message);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Input
        id="name"
        label="Name"
        type="text"
        placeholder="@username"
        name="name"
        {...register('name')}
      />
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
        {...register('email')}
      />

      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
        {...register('password')}
      />

      <Input
        id="confirm-password"
        label="Confirm Password"
        type="password"
        placeholder="Re-type password"
        name="confirmPassword"
        {...register('confirmPassword')}
      />
      <div className="flex items-center gap-4 py-1">
        <input
          id="terms"
          className="border-inputBorder h-4 w-4 rounded-sm border focus:outline-none"
          type="checkbox"
          {...register('terms')}
        />

        <Text className={`text-primary`}>Accept Terms of Service</Text>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <Button>Sign Up</Button>
        <Text className="mt-4 flex items-center">
          Already Have an Account?{' '}
          <Button type="submit" className="pl-1" variant={'link'} size="link">
            Login
          </Button>
        </Text>
      </div>
    </form>
  );
};

export default LoginForm;

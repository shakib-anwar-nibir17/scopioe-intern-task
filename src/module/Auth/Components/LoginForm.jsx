import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Button } from '../../../Components/buttons/button';
import { Input } from '../../../Components/inputs/Input';
import { Text } from '../../../Components/text/Text';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
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
    console.log(errors);
  };

  const onError = (errors) => {
    Object.keys(errors).forEach((field) => {
      toast.error(errors[field].message);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 py-1">
          <input
            id="remember"
            className="h-4 w-4 rounded-sm border border-inputBorder focus:outline-none"
            type="checkbox"
            {...register('remember')}
          />

          <Text>Remember Me</Text>
        </div>
        <div>
          <Link>
            <Button type="submit" className="pl-1" variant={'link'} size="null">
              Forget Password?
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <Button variant="secondary">Sign in</Button>
        <Text className="mt-4 flex items-center">
          Don&apos;t Have an Account?
          <Link to="/auth/signin">
            <Button type="submit" className="pl-1" variant={'link'} size="null">
              Create Account
            </Button>
          </Link>
        </Text>
      </div>
    </form>
  );
};

export default LoginForm;

import { Input } from '../../../Components/inputs/Input';

const LoginForm = () => {
  return (
    <div className="mt-10">
      <form>
        <Input id="name" label="Name" type="text" placeholder="@username" name="name" />
        <Input id="email" label="Email" type="email" placeholder="Enter your email" name="email" />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <Input
          id="confirm-password"
          label="Confirm Password"
          type="password"
          placeholder="Re-type password"
          name="confirm-password"
        />
      </form>
    </div>
  );
};

export default LoginForm;

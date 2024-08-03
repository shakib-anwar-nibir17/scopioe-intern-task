import MainLogo from '../../../Components/Logos/MainLogo';
import { Text } from '../../../Components/text/Text';
import LoginForm from '../Components/LoginForm';

const LoginPage = () => {
  return (
    <div className="w-[42.9rem]">
      <MainLogo />
      <Text variant="headerMedium" type="medium" className={`mb-6 mt-8`}>
        Sign In To Your Account
      </Text>
      <Text variant="bodyRegular">
        Welcome Back! By click the sign up button, you&apos;re agree to Zenitood Terms and Service
        and acknowledge the Privacy and Policy
      </Text>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

import MainLogo from '../../../Components/Logos/MainLogo';
import Facebook from '../../../Components/SocialSignup/Facebook';
import Google from '../../../Components/SocialSignup/Google';
import { Text } from '../../../Components/text/Text';
import LoginForm from '../Components/LoginForm';
import DesktopAuth from './DesktopAuth';

const DesktopLogin = () => {
  return (
    <DesktopAuth>
      <div className="my-14 w-[42.9rem]">
        <MainLogo />
        <Text variant="headerMedium" type="medium" className={`mb-6 mt-8`}>
          Log In To Your Account
        </Text>
        <Text variant="bodyRegular">Welcome Back! Select a method to log in</Text>
        <div className="mt-10 flex gap-5">
          <Google />
          <Facebook />
        </div>
        <div className="relative my-8">
          <hr />
          <Text className="absolute inset-x-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white px-4 text-[#5C635A]">
            Or Continue with Email
          </Text>
        </div>
        <LoginForm />
      </div>
    </DesktopAuth>
  );
};

export default DesktopLogin;

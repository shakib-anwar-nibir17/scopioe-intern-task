import { Button } from '../../../Components/buttons/button';
import MainLogo from '../../../Components/Logos/MainLogo';
import { SimplePagination } from '../../../Components/pagination/simplePagination';
import Facebook from '../../../Components/SocialSignup/Facebook';
import Google from '../../../Components/SocialSignup/Google';
import { Text } from '../../../Components/text/Text';
import LoginForm from './LoginForm';
import MobileAuth from './MobileAuth';

import { useLocation } from 'react-router-dom';

const MobileLogin = () => {
  const location = useLocation();
  return (
    <MobileAuth>
      <section className="hidden px-4 py-16">
        <div className="relative mb-20 flex flex-col items-center justify-center">
          <MainLogo />
          <Text variant="headerMedium" type="bold" className={`mb-6 mt-8 opacity-70`}>
            Login to Your Account
          </Text>
          <Text className={`text-white opacity-70`} variant="bodyRegular">
            Welcome Back! By click the sign up button, you&apos;re agree to Zenitood Terms and
            Service and acknowledge the{' '}
            <Button variant="link" size="null">
              Privacy and Policy
            </Button>
          </Text>
        </div>

        <Button
          variant="ghost"
          size="null"
          className="mx-auto flex h-[14.3rem] w-[calc(100%-3rem)] flex-col items-center justify-center rounded-lg bg-[#1F2833] text-center opacity-70"
        >
          <Text variant="bodyLarge" type="medium" className={`text-primary`}>
            Create Account
          </Text>
          <Text variant="bodyLarge" type="medium" className={`text-white`}>
            Fill your Information
          </Text>
        </Button>
        <div className="flex justify-center">
          <SimplePagination location={location?.pathname} />
        </div>
      </section>
      <section className="h-full w-full">
        <div className="h-[27%] w-full bg-transparent"></div>
        <div className="h-[73%] w-full rounded-t-[4rem] bg-white px-4 py-6">
          <Text variant="headerMedium" type="medium" className={`mb-6 mt-4 text-center`}>
            Log In To Your Account
          </Text>
          <Text className="text-center" variant="bodyRegular">
            Welcome Back! Select a method to log in
          </Text>
          <div className="mt-4 flex gap-5">
            <Google />
            <Facebook />
          </div>
          <div className="relative my-8">
            <hr />
            <Text
              variant="sub"
              className="absolute inset-x-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 transform bg-white px-10 text-center text-[#5C635A]"
            >
              Or Continue with Email
            </Text>
          </div>
          <LoginForm />
        </div>
      </section>
    </MobileAuth>
  );
};

export default MobileLogin;

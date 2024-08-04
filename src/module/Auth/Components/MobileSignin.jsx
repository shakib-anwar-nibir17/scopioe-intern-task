import { Button } from '../../../Components/buttons/button';
import MainLogo from '../../../Components/Logos/MainLogo';
import { SimplePagination } from '../../../Components/pagination/simplePagination';
import { Text } from '../../../Components/text/Text';
import MobileAuth from './MobileAuth';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SigninForm from './SigninForm';

const MobileSignin = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <MobileAuth>
      <section className={`${open ? 'hidden' : 'block'} px-4 py-16`}>
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
          onClick={() => setOpen(!open)}
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
      <section className={`${open ? 'block' : 'hidden'} h-full w-full`}>
        <div className="flex h-[27%] w-full flex-col items-center justify-center bg-transparent pt-11 text-md text-white">
          <MainLogo />
          <Text className={`mt-6 text-md opacity-70`}>Create Account</Text>
          <Text className="text-md opacity-70">Fill your information</Text>
        </div>
        <div className="h-[73%] w-full rounded-t-[4rem] bg-white px-4 py-6">
          <Text variant="headerMedium" type="medium" className={`mb-6 mt-4 text-center`}>
            Sign in
          </Text>
          <SigninForm />
        </div>
      </section>
    </MobileAuth>
  );
};

export default MobileSignin;

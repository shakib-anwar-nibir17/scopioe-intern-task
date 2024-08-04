import { lazy, Suspense } from 'react';
import useDeviceType from '../../../hooks/useDeviceTypes';

const DesktopSignin = lazy(() => {
  return import('../Components/DesktopSignin');
});
const MobileSignin = lazy(() => {
  return import('../Components/MobileSignin');
});

const SigninPage = () => {
  const deviceType = useDeviceType();
  console.log(deviceType);
  const renderLoginComponent = () => {
    if (deviceType === 'desktop') {
      return <DesktopSignin />;
    } else {
      return <MobileSignin />;
    }
  };

  return <Suspense fallback={<div>Loading...</div>}>{renderLoginComponent()}</Suspense>;
};

export default SigninPage;

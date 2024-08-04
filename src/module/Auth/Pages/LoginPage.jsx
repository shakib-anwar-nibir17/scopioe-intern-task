import { lazy, Suspense } from 'react';
import useDeviceType from '../../../hooks/useDeviceTypes';

const DesktopLogin = lazy(() => {
  return import('../Components/DesktopLogin');
});
const LoginMobile = lazy(() => {
  return import('../Components/MobileLogin');
});

const LoginPage = () => {
  const deviceType = useDeviceType();
  console.log(deviceType);
  const renderLoginComponent = () => {
    if (deviceType === 'desktop') {
      return <DesktopLogin />;
    } else {
      return <LoginMobile />;
    }
  };

  return <Suspense fallback={<div>Loading...</div>}>{renderLoginComponent()}</Suspense>;
};

export default LoginPage;

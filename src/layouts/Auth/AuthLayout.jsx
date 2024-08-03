import { Outlet, useLocation } from 'react-router-dom';
import Container from '../../Components/Container/Container';
const AuthLayout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Container>
      <div className="flex h-screen gap-30 px-30 pb-[11.2rem] pt-[10.8rem]">
        <div className="h-full flex-1">
          <Outlet />
        </div>
        <div className="h-full flex-1 rounded-2xl bg-[url('/authbackground.png')] bg-cover bg-center"></div>
      </div>
    </Container>
  );
};

export default AuthLayout;

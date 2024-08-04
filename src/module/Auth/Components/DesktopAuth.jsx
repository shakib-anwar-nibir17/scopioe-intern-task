import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Container from '../../../Components/Container/Container';
import { SimplePagination } from '../../../Components/pagination/simplePagination';
import { Text } from '../../../Components/text/Text';

const DesktopAuth = ({ children }) => {
  const location = useLocation();
  return (
    <Container>
      <div className="flex h-screen gap-30 px-30 pb-[11.2rem] pt-[10.8rem]">
        <div className="h-full flex-1">{children}</div>
        <div className="relative flex h-full flex-1 items-center justify-center rounded-2xl bg-[url('/authbackground.png')] bg-cover bg-center">
          <div className="flex h-[14.2rem] w-[34rem] flex-col items-center justify-center rounded-lg bg-[#152A16] opacity-70">
            <div className="text-center">
              <Text variant="bodyLarge" type="medium" className={`text-primary`}>
                Create Account
              </Text>
              <Text variant="bodyLarge" type="medium" className={`text-white`}>
                Fill your Information
              </Text>
            </div>
            <SimplePagination location={location?.pathname} />
          </div>
        </div>
      </div>
    </Container>
  );
};

DesktopAuth.propTypes = {
  children: PropTypes.node,
};

export default DesktopAuth;

import PropTypes from 'prop-types';

const MobileAuth = ({ children }) => {
  return (
    <div className="h-screen w-full bg-[url('/mobile-bg.jpeg')] bg-cover bg-center">{children}</div>
  );
};

MobileAuth.propTypes = {
  children: PropTypes.node,
};

export default MobileAuth;

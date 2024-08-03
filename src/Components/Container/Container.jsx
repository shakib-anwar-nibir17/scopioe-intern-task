import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <main className="mx-auto w-[144rem]">{children}</main>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

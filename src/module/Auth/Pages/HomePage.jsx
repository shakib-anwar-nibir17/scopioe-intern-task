import useDeviceType from '../../../hooks/useDeviceTypes';

const HomePage = () => {
  const device = useDeviceType();
  console.log(device);
  return <div>Homepage</div>;
};

export default HomePage;

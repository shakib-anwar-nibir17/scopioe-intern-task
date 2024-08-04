export const getDeviceType = () => {
  if (typeof window !== 'undefined') {
    let width = window.innerWidth;

    if (width < 639) {
      return 'mobile';
    } else {
      return 'desktop';
    }
  }
  return '';
};

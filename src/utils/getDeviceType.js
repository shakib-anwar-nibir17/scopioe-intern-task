export const getDeviceType = () => {
  if (typeof window !== 'undefined') {
    let width = window.innerWidth;

    if (width < 639) {
      return 'mobile';
    } else if (width < 1280) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }
  return '';
};

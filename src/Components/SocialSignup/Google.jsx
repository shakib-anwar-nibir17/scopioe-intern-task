import { Button } from '../buttons/button';
import GoogleLogo from '../Logos/Auth/GoogleLogo';

const Google = () => {
  return (
    <Button
      size="null"
      className="h-13 w-full rounded-lg bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF] shadow-lg"
      variant="ghost"
    >
      <GoogleLogo />
      Google
    </Button>
  );
};

export default Google;

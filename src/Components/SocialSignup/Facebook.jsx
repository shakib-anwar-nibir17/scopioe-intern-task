import { Button } from '../buttons/button';
import FacebookLogo from '../Logos/Auth/FacebookLogo';
const Facebook = () => {
  return (
    <Button size="null" className="bg-primary h-13 w-full rounded-lg text-white" variant="ghost">
      <FacebookLogo />
      Facebook
    </Button>
  );
};

export default Facebook;

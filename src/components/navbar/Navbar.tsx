import { Socials } from "./Socials";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "../Logo";
import { NavigationLinks } from "./NavigationLinks";

export const Navbar = () => {
  return (
    <div className='h-full flex justify-between items-center max-w-6xl mx-auto px-4 sm:px-8 md:px-12 xl:px-0 lg:grid lg:grid-cols-3'>
      <NavigationLinks />
      <Logo />
      <Socials />
      <MobileMenu />
    </div>
  );
};

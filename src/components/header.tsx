import Image from 'next/image';

import SentryLogoSVG from 'sentry-docs/logos/sentry-logo-dark.svg';

import {MobileMenu} from './mobileMenu';
import {NavLink} from './navlink';
import {Search} from './search';

type Props = {
  pathname: string;
  searchPlatforms: string[];
};

export function Header({pathname, searchPlatforms}: Props) {
  return (
    <header className="bg-white h-[var(--header-height)] w-full z-50 border-b border-gray fixed top-0">
      {/* define a header-height variable for consumption by other components */}
      <style>{':root { --header-height: 80px; }'}</style>
      <nav className="mx-auto px-6 lg:px-8 py-2 flex items-center text-primary">
        <a
          href="/"
          title="Sentry error monitoring"
          className="flex flex-shrink-0 items-center lg:w-[calc(var(--sidebar-width,300px)-2rem)] text-2xl font-medium text-darkPurple"
        >
          <Image src={SentryLogoSVG} alt="Sentry's logo" width={64} className="h-16" />
          Docs
        </a>
        <div className="hidden md:flex justify-center lg:justify-start w-full px-6">
          <Search path={pathname} searchPlatforms={searchPlatforms} />
        </div>
        <div className="hidden lg:flex justify-end flex-1 space-x-2 items-center">
          <NavLink href="/api/">API</NavLink>
          <NavLink href="/changelog">Changelog</NavLink>
          <NavLink href="https://try.sentry-demo.com/demo/start/">Sandbox</NavLink>
          <NavLink href="https://sentry.io/">Sign In</NavLink>
        </div>
        <div className="lg:hidden ml-auto">
          <MobileMenu pathname={pathname} searchPlatforms={searchPlatforms} />
        </div>
      </nav>
    </header>
  );
}

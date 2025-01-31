import Link from 'next/link';
import { NavLinks } from '@/app/components/nav-links';
import BeerLogo from '@/app/components/beer-logo';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-yellow-400 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
        <BeerLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}

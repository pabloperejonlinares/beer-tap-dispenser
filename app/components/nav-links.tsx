'use client';

import {
  UserIcon,
  PowerIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

const links = [
  { name: 'Dispensers', href: '/dispensers', icon: FunnelIcon,
  },
  { name: 'Admin', href: '/dispensers/admin', icon: UserIcon }
];

export function NavLinks() {
  const pathname = usePathname();
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)

  const logOut = () => {
    localStorage.setItem("user", '')
    router.push('/')
  }

  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");
    setIsAdmin(localStorageUser === 'admin');
  }, []);
  
  return (
    <>
    {links.map((link) => {
      const LinkIcon = link.icon;
      if (link.name === 'Admin') {
        if (isAdmin) {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        }
      } else {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      }

    })}
    {isAdmin
      ? <><div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div><form>
          <button onClick={logOut} className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form></>
      : null}
    
  </>
);
}

export default NavLinks;

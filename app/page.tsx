import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import BeerLogo from '@/app/components/beer-logo';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-yellow-400 p-4 md:h-52">
      <BeerLogo />
      <span className='text-4xl font-bold ml-10'>Beer Tap Dispenser</span>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className='antialiased text-xl text-gray-800 md:text-3xl md:leading-normal'>
            <strong>Welcome to Beer Tap Dispenser.</strong> Self beer service.
          </p>
          <Link
            href="/dispensers"
            className="flex items-center gap-5 self-start rounded-lg bg-yellow-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-yellow-400 md:text-base"
          >
            <span><b>Go to beer tap dispensers</b></span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-yellow-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-yellow-400 md:text-base"
          >
            <span><b>Admin area</b></span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-gradient-to-r from-yellow-400 to-yellow-900">
          <Image
            width={500}
            height={500}
            className="hidden md:block"
            src='/beer-tap.png'
            alt='Festival'
          />
        </div>
      </div>
    </main>
  );
}

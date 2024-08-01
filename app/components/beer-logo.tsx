import Image from 'next/image';

export default function BeerLogo() {
  return (
    <Image
      width={100}
      height={100}
      className="hidden md:block"
      src='/beer-logo.png'
      alt='Logo'
    />
  );
}

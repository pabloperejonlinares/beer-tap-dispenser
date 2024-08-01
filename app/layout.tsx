import './styles/global.css'
import { inter } from '@/app/components/fonts'

export const metadata = {
  title: 'Beer tap dispenser',
  description: '',
  icons: {
    icon: '@/public/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

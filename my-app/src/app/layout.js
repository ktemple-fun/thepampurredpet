import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Pet Blog',
  description: 'A comprehensive pet blog with affiliate links and pet insurance information.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <meta name="p:domain_verify" content="e521057a35122426a0170e8a2908b736"/>
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}

import '@/styles/globals.css';

import { inter, roboto } from '@/fonts';
import { NotificationWrapper } from '@/libs/toast';
import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-roboto: ${roboto.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
      <NotificationWrapper />
    </>
  );
}


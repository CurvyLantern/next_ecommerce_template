import '@/styles/globals.css';

import { NotificationWrapper } from '@/libs/toast';
import type { AppProps } from 'next/app';

import { inter, roboto } from '@/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-roboto: ${roboto.style.fontFamily};
          }
        `,
        }}
      />
      <Component {...pageProps} />
      <NotificationWrapper />
    </>
  );
}


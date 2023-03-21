import '@/styles/globals.css';

import { NotificationWrapper } from '@/libs/toast';
import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Probably this is causing the error .. neeeds to install client bla bla */}
      {/* <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-roboto: ${roboto.style.fontFamily};
          }
        `}
      </style> */}
      {/* Possible fix */}
      {/* <style
        dangerouslySetInnerHTML={{
          _html: `
            :root {
              --font-inter: ${inter.style.fontFamily}
            }
        `, */}
      {/* }}></style> */}
      <Component {...pageProps} />
      <NotificationWrapper />
    </>
  );
}


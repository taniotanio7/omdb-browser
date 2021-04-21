import type { AppProps } from "next/app";
import Head from "next/head";
import tw, { GlobalStyles, css } from "twin.macro";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* TODO: add favicons for differenct browsers - https://realfavicongenerator.net/ */}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <GlobalStyles />
      <Global
        styles={css`
          html,
          body {
            height: 100%;
          }

          #__next {
            min-height: 100%;
          }

          body {
            ${tw`bg-gray-50 dark:bg-gray-900`}
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

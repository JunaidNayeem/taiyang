import React from "react";
import Head from "next/head";
import appData from "@data/app.json";
import { FormspreeProvider } from "@formspree/react";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FormspreeProvider project="YOUR_PROJECT_ID">
        <Head>
          {/* seo begin */}
          <title>{appData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="author" content="bslthemes" />
          {/* seo end */}
        </Head>
        <Component {...pageProps} />
      </FormspreeProvider>
    </>
  );
}

export default MyApp;

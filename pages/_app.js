import { Fragment } from "react";
import Head from 'next/head'
import "./globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;

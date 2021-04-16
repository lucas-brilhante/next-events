import { Fragment } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import "./globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;

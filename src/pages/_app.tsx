import "./index.css";
import type { NextPage } from "next";
import {Provider} from 'react-redux';
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { appWrapper, Layout } from "@/shared";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const {store, props} = appWrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

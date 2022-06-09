import React from "react";
import "@/styles/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// import '@fortawesome/fontawesome-svg-core/styles.css'
// import { Header } from '@/components/common/Header'

import type { AppProps } from "next/app";
// font awesome config
config.autoAddCss = false;
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      {/*<div className="h-5"></div>*/}
      {/* footer  */}
      {/*<Footer/>*/}
    </>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      results: context,
    },
  };
}

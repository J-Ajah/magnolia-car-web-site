import React from "react";
import "@/styles/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";


import type { AppProps } from "next/app";
// font awesome config
config.autoAddCss = false;
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
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

import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout/index";

const TokenTopup = () => {
  return <div>This is Token topup page</div>;
};

export default TokenTopup;

TokenTopup.getLayout = function getLayout(pages, pageProps) {
  return <AppLayout {...pageProps}>{pages}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});

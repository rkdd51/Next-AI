import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
const TokenTopup = () => {
  return <div>This is Token topup page</div>;
};

export default TokenTopup;
export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});

import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";
import { AppLayout } from "../../components/AppLayout";

const NewPost = (props) => {
  // console.log("New Post props page: ", props);
  return <div>Hello this is new post</div>;
};

export default NewPost;

NewPost.getLayout = function getLayout(pages, pageProps) {
  return <AppLayout {...pageProps}>{pages}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});

import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

const NewPost = (props) => {
  return <div>Hello this is new post</div>;
};

export default NewPost;

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});

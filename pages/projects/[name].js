import Head from "../../components/Head";
import Nav from "../../components/Nav";
import { useRouter } from "next/router";
import { Fragment } from "react";

const Post = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <Fragment>
      <Head />
      <Nav />
      <h1>Project name : {name}</h1>
    </Fragment>
  );
};

export default Post;

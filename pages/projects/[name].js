import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "../../components/Head";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Aside from "../../components/Aside";
import Main from "../../components/Main";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 4fr 1fr;
`;
const Post = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <Fragment>
      <Head />
      <Nav />
      <h1>Project name : {name}</h1>
      <Section>
        <Main />
        <Aside />
      </Section>
      <Footer />
    </Fragment>
  );
};

export default Post;

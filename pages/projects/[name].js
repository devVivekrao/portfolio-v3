import { Fragment } from "react";
import Head from "../../components/Head";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Aside from "../../components/ProjectAside";
import Main from "../../components/ProjectMain";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 4fr 1fr;
`;
const Post = () => {
  return (
    <Fragment>
      <Head />
      <Nav />

      <Section>
        <Main />
        <Aside />
      </Section>

      <Footer />
    </Fragment>
  );
};

export default Post;

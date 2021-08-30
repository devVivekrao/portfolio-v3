import { Fragment } from "react";
import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import Main from "../components/Main";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 4fr 1fr;
`;
const About = () => {
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

export default About;

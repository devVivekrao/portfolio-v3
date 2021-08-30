import { Fragment, useEffect, useState } from "react";
import Head from "../components/Head";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import { AllProjects } from "../state/state";

const Index = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    setAllProjects(AllProjects);
  }, []);

  return (
    <Fragment>
      <Head />
      <Nav />
      <Header />
      <Featured allProjects={allProjects} />
      <Footer />
    </Fragment>
  );
};

export default Index;

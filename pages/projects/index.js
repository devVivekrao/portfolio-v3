import Head from "../../components/Head";
import Nav from "../../components/Nav";
import { Fragment } from "react";
import Footer from "../../components/Footer";
import Project from "../../components/Project";
import styled from "styled-components";
import { AllProjects } from "../../state/state";
import { useEffect, useState } from "react";

const OutterDiv = styled.section`
  padding-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 10rem;
`;

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    setAllProjects(AllProjects);
  }, []);
  return (
    <Fragment>
      <Head />
      <Nav />

      <OutterDiv>
        {allProjects.map((project, index) => (
          <Project project={project} index={index} key={project.id} />
        ))}
      </OutterDiv>

      <Footer />
    </Fragment>
  );
};

export default Projects;

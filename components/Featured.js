import styled from "styled-components";
import Project from "./Project";

const Section = styled.section`
  padding-top: 10rem;
`;

const H1 = styled.h1`
  text-align: center;
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-size: 2.7rem;
`;

const OutterDiv = styled.div`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8rem;
`;

const Featured = (props) => {
  return (
    <Section>
      <H1>Featured Projects</H1>
      <OutterDiv>
        {props.allProjects.map((project, index) =>
          project.featured ? (
            <Project
              project={project}
              index={index}
              hasTwoFraction="true"
              key={project.id}
            />
          ) : (
            ""
          )
        )}
      </OutterDiv>
    </Section>
  );
};

export default Featured;

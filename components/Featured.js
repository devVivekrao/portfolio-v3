import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 8rem;
`;

const H1 = styled.h1`
  text-align: center;
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-size: 2.7rem;
`;
const P = styled.p`
  letter-spacing: 1px;
  margin-top: -20px;
`;

const Featured = () => {
  return (
    <Section>
      <H1>Featured Projects</H1>
    </Section>
  );
};

export default Featured;

import styled from "styled-components";

const MainDiv = styled.main`
  padding-top: 6rem;
`;
const H2 = styled.h1`
  text-align: left;
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-size: 2rem;
`;
const Main = () => {
  return (
    <MainDiv>
      <H2>MainDiv</H2>
    </MainDiv>
  );
};

export default Main;

import styled from "styled-components";
import { useRouter } from "next/router";
import { AllProjects } from "../state/state";
const MainDiv = styled.main`
  padding-top: 7rem;
`;
const H2 = styled.h1`
  text-align: left;
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-size: 2rem;
`;
const Main = () => {
  const router = useRouter();
  const name = router.query.name;
  const project = AllProjects.filter((p) => p.name == name);
  return (
    <MainDiv>
      <H2>{project[0].name}</H2>
    </MainDiv>
  );
};

export default Main;

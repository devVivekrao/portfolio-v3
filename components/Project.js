import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const InnerDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: ${(props) => (props.twoFraction ? "1fr 1fr" : "1fr")};
  padding: 1rem;
`;
const Index = styled.h1`
  position: absolute;
  top: -5.5rem;
  left: 0;
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-size: 5rem;
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
`;
const H3 = styled.h3`
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-size: 1.4rem;
`;
const P = styled.p`
  letter-spacing: 0.5px;
  margin-top: 0.5rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #cbd5e0;
`;
const Tags = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 1rem;
`;
const Project = (props) => {
  return (
    <Link href={"projects/" + props.project.name} passHref>
      <InnerDiv className="innerDiv" twoFraction={props.hasTwoFraction}>
        <Index>0{props.index + 1}</Index>
        <Image src={props.project.image} alt="Project image " />
        <FlexDiv>
          <H3>{props.project.name}</H3>
          <P>{props.project.description}</P>
          <Tags>
            {props.project.tags.map((tag, index) => (
              <span className={tag} key={index}>
                {" "}
                #{tag}
              </span>
            ))}
          </Tags>
        </FlexDiv>
      </InnerDiv>
    </Link>
  );
};

export default Project;

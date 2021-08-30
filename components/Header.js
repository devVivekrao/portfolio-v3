import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-top: 10rem;
`;

const H1 = styled.h1`
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-size: 2.7rem;
`;
const P = styled.p`
  letter-spacing: 0.5px;
  margin-top: 20px;
`;
const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
`;
const ButtonRed = styled.button`
  background: #fed7d7;
  color: #e53e3e;
  border-bottom: 4px solid #e53e3e;
`;
const ButtonPurple = styled.button`
  background: #d6bcfa;
  color: #6b46c1;
  border-bottom: 4px solid #6b46c1;
  margin-left: 1.3rem;
  display: flex;
`;
const Header = () => {
  return (
    <Section>
      <div>
        <H1>
          Hi, I’m Vivek. A fullstack javascript (MERN) developer based in India.{" "}
        </H1>
        <P>
          I specialise in creating interactive experiences and functional <br />
          interfaces using reactJS (nextJS). I'm passionate about giving back
          and <br /> teaching what I know so you may find me sharing my
          development <br /> thoughts on twitter and posting about my life on
          Instagram.
        </P>
        <BtnDiv>
          <ButtonRed className="btn">
            <Link href="#">Download resume</Link>
          </ButtonRed>
          <ButtonPurple className="btn">
            <Link href="/about">Learn more about me</Link>
          </ButtonPurple>
        </BtnDiv>
      </div>
      <div></div>
    </Section>
  );
};

export default Header;

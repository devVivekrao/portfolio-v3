import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const FooterDiv = styled.footer`
  margin-top: 7rem;
  padding: 5rem 0;
  border-top: 4px solid #ffffff;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
`;
const Logo = styled.h1`
  font-family: "Source Code Pro", Helvetica Neue, sans-serif;
  font-size: 1.6rem;
  margin-bottom: 40px;
`;
const P = styled.p`
  letter-spacing: 0.5px;
  margin-top: 20px;
`;
const Email = styled.a`
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-weight: 700;
`;
const Ul = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const Li = styled.li`
  margin-top: 20px;
`;
const Footer = () => {
  const router = useRouter();

  return (
    <FooterDiv>
      <div>
        <Logo>
          <Link href="/">Vivek rao</Link>
        </Logo>
        <Email>
          <Link href="mailto:dev.vivekrao@gmail.com">
            dev.vivekrao@gmail.com
          </Link>
        </Email>
        <P>
          Designed and built by Vivek rao in 2021 using <br /> nextJS (reactJS).
        </P>
        <P>
          Last updated August 2021. Fonts in Source Serif Pro <br /> and Sofia
          Pro. Icons by the akar icons.
        </P>
      </div>
      <Ul>
        <Li className={router.pathname == "/" ? "active-footer" : ""}>
          <Link href="/">Home</Link>
        </Li>
        <Li className={router.pathname == "/about" ? "active-footer" : ""}>
          <Link href="/about">About</Link>
        </Li>
        <Li className={router.pathname == "/projects" ? "active-footer" : ""}>
          <Link href="/projects">Projects</Link>
        </Li>
        <Li>
          <Link href="#">Resume</Link>
        </Li>
      </Ul>
      <Ul>
        <Li>
          <Link href="https://github.com/devVivekrao">
            <a target="_blank"> Github</a>
          </Link>
        </Li>
        <Li>
          <Link href="https://www.linkedin.com/in/vivek-rao-9ab7651b6/">
            <a target="_blank">Linkedin </a>
          </Link>
        </Li>
        <Li>
          <Link href="https://twitter.com/devVivekrao">
            <a target="_blank">Twitter</a>
          </Link>
        </Li>
        <Li>
          <Link href="https://www.instagram.com/dev.vivekrao/">
            <a target="_blank">Instagram</a>
          </Link>
        </Li>
      </Ul>
    </FooterDiv>
  );
};

export default Footer;

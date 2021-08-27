import Link from "next/link";
import useDarkMode from "use-dark-mode";
import { MoonFill, SunFill } from "akar-icons";
import styled from "styled-components";
import { useRouter } from "next/router";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H1 = styled.h1`
  font-family: "Source Code Pro", Helvetica Neue, sans-serif;
  font-size: 1.6rem;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Li = styled.li`
  margin: 0px 2rem;
  padding: 10px 0;
  font-weight: 700;
  letter-spacing: 1px;
`;
const Nav = () => {
  const darkmode = useDarkMode(true);
  const router = useRouter();

  const isDarkMode = localStorage.getItem("darkMode");

  return (
    <Navbar>
      <H1>
        <Link href="/">Vivek rao</Link>
      </H1>
      <Ul>
        <Li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </Li>
        <Li className={router.pathname == "/about" ? "active" : ""}>
          <Link href="/about">About</Link>
        </Li>
        <Li className={router.pathname == "/projects" ? "active" : ""}>
          <Link href="/projects">Projects</Link>
        </Li>
        <Li>
          <Link href="#">Resume</Link>
        </Li>
      </Ul>
      <Link href="#">
        {isDarkMode == "true" ? (
          <SunFill
            onClick={darkmode.toggle}
            size={24}
            color="#e8c031"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <MoonFill
            onClick={darkmode.toggle}
            size={24}
            color="#6B46C1"
            style={{ cursor: "pointer" }}
          />
        )}
      </Link>
    </Navbar>
  );
};

export default Nav;

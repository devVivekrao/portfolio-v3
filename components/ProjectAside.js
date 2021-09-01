import styled from "styled-components";
import Link from "next/link";
import { Globe, GithubFill } from "akar-icons";
import { useRouter } from "next/router";
import { AllProjects } from "../state/state";

const Sidebar = styled.aside`
  padding-top: 5rem;
`;
const H2 = styled.h1`
  text-align: left;
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-size: 2rem;
  margin: 2rem 0;
`;
const Div = styled.div`
  text-align: left;
  margin-bottom: 1rem;
`;

const Span2 = styled.p`
  font-family: "Sofia Pro", Helvetica Neue, sans-serif;
  margin-bottom: 0.5rem;
  text-decoration: underline;
  cursor: pointer;
  :first-child {
    color: #e53e3e;
  }
  :last-child {
    color: #6b46c1;
  }
`;

const Aside = (props) => {
  const router = useRouter();
  const name = router.query.name;
  const project = AllProjects.filter((p) => p.name == name);
  return (
    <Sidebar>
      <H2>In action</H2>
      <Div>
        <Span2>
          <Globe
            size={24}
            color="#e53e3e"
            style={{ margin: "0 10px -4px 0" }}
          />
          <Link href={project[0].live}>
            <a target="_blank">View live</a>
          </Link>
        </Span2>
        <Span2>
          <GithubFill
            size={24}
            color="#6b46c1"
            style={{ margin: "0 10px -4px 0" }}
          />
          <Link href={project[0].github}>
            <a target="_blank">View code</a>
          </Link>
        </Span2>
      </Div>
    </Sidebar>
  );
};

export default Aside;

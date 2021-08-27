import Head from "../../components/Head";
import Nav from "../../components/Nav";
import Link from "next/link";
import { Fragment } from "react";

const Projects = () => {
  return (
    <Fragment>
      <Head />
      <Nav />
      <h1>Projects</h1>
      <ul>
        <li>
          <Link href="projects/project-1">
            <a>project-1</a>
          </Link>
        </li>
        <li>
          <Link href="projects/project-2 ">
            <a>project-2</a>
          </Link>
        </li>{" "}
        <li>
          <Link href="projects/project-3">
            <a>project-3</a>
          </Link>
        </li>{" "}
      </ul>
    </Fragment>
  );
};

export default Projects;

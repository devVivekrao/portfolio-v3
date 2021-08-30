import styled from "styled-components";
import Link from "next/link";
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
const H3 = styled.h3`
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-weight: 700;
  margin-bottom: 0.2rem;
`;
const Span2 = styled.p`
  font-family: "Sofia Pro", Helvetica Neue, sans-serif;
  margin-bottom: 0.5rem;
`;
const Aside = () => {
  return (
    <Sidebar>
      <H2>In summary</H2>
      <Div>
        <H3>Full name</H3>
        <Span2>Vivek kumar rao</Span2>
      </Div>
      <Div>
        <H3>Place of birth</H3>
        <Span2>Gorakhpur, India</Span2>
      </Div>
      <Div>
        <H3>Current location</H3>
        <Span2>Gorakhpur, India</Span2>
      </Div>
      <Div>
        <H3>Education</H3>
        <Span2>Bachelor of arts</Span2>
      </Div>
      <Div>
        <H3>Interests</H3>
        <Span2>traveling, camping, cooking, reading</Span2>
      </Div>
      <H2>Contact me</H2>
      <Div>
        <H3>Email</H3>
        <Span2>
          <Link href="mailto:dev.vivekrao@gmail.com">
            dev.vivekrao@gmail.com
          </Link>
        </Span2>
      </Div>
      <Div>
        <H3>Social media</H3>
        <Span2>
          <Link href="https://www.linkedin.com/in/vivek-rao-9ab7651b6/">
            <a target="_blank">Linkedin </a>
          </Link>{" "}
        </Span2>
        <Span2>
          <Link href="https://www.instagram.com/dev.vivekrao/">
            <a target="_blank">Instagram</a>
          </Link>
        </Span2>
        <Span2>
          {" "}
          <Link href="https://twitter.com/devVivekrao">
            <a target="_blank">Twitter</a>
          </Link>
        </Span2>
      </Div>
    </Sidebar>
  );
};

export default Aside;

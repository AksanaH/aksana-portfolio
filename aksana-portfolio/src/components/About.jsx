import styled from "styled-components";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <ContainerAboutMe>
      <h2>About me</h2>
      <p>
        Full-stack developer with experience creating diverse applications
        showcased in a personal portfolio. Highly motivated, ambitious, and
        driven by a strong positive mindset. Recognized for excellent
        communication skills, adaptability, and a reliable work ethic. A dynamic
        collaborator with a sociable and approachable nature, thriving in
        fast-paced environments while maintaining strong organizational skills.
        Passionate about leveraging technical expertise to contribute to
        innovative and impactful software development teams.
      </p>
      <p>
        Dedicated to hard work and embracing challenges with honesty and
        openness. Enthusiastic about traveling, exploring new countries, cities,
        and unique destinations worldwide. Particularly enjoys visiting
        amusement parks and experiencing thrilling attractions.
      </p>
      <ContainerButtons>
        <Button
          variant="light"
          href="../resume/Aksana-Hlebik-resume.pdf"
          download="Aksana-Hlebik-resume"
        >
          Download Resume
        </Button>
        <Button
          variant="light"
          href="../certificate/Hlebik_Aksana_TCH-5003-069.pdf"
          download="Aksana-Hlebik-certificate"
        >
          Download Certificate
        </Button>
        <Button variant="light" href="#contact">
          Contact
        </Button>
      </ContainerButtons>
    </ContainerAboutMe>
  );
};

const ContainerAboutMe = styled.div`
  padding: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  p {
    text-align: justify;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  .btn {
    margin: 0 10px;
    border-radius: 10px;
    box-shadow: 10px -5px rgb(180, 180, 180);
  }
`;
export default About;

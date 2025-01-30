import styled from "styled-components";
import Photo from "./Photo";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Footer from "./Footer";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import {
  SiReactbootstrap,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiMongodb,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const MainLayout = () => {
  const dataProjects = [
    {
      name: "Task Board",
      technologies: "HTML/CSS/JavaScript",
      src: "/images/task-board.png",
      website: "https://aksanah.github.io/task-board/",
      github: "https://github.com/AksanaH/task-board",
      description:
        "A website for adding, managing, and tracking project tasks and progress efficiently.",
      id: 1,
    },
    {
      name: "Weather Dashboard",
      technologies: "HTML/CSS/JavaScript",
      src: "/images/weather-dashboard.png",
      website: "https://aksanah.github.io/weather-dashboard/",
      github: "https://github.com/AksanaH/weather-dashboard",
      description:
        "An app to check current weather and 5-day forecasts for any city.",
      id: 2,
    },
    {
      name: "Note Taker",
      technologies: "HTML/CSS/JavaScript",
      src: "/images/note-taker.png",
      website: "https://note-taker-4px8.onrender.com/",
      github: "https://github.com/AksanaH/note-taker",
      description:
        "This website helps people to add individual project tasks, manage their state of progress and track overall project progress accordingly.",
      id: 3,
    },
    {
      name: "Readme Generator",
      technologies: "Node.js",
      src: "/images/tech-blog.png",
      website:
        "https://drive.google.com/file/d/1uX2_jEc9THN5asoRgZCb-JnD5px7Ujj3/view?usp=sharing",
      github: "https://github.com/AksanaH/readme-generator",
      description:
        "This application helps quickly create a professional README for a project.",
      id: 4,
    },
  ];

  const dataFrontEndSkills = [
    {
      skill: "HTML5",
      icon: <FaHtml5 />,
      id: 1,
    },
    {
      skill: "CSS3",
      icon: <FaCss3 />,
      id: 2,
    },
    {
      skill: "React",
      icon: <FaReact />,
      id: 3,
    },
    {
      skill: "JavaScript",
      icon: <FaJs />,
      id: 4,
    },
    {
      skill: "Bootstrap",
      icon: <FaBootstrap />,
      id: 5,
    },
    {
      skill: "React Bootstrap",
      icon: <SiReactbootstrap />,
      id: 6,
    },
    {
      skill: "jQuerry",
      icon: <DiJqueryLogo />,
      id: 7,
    },
  ];

  const dataBackEndSkills = [
    {
      skill: "APIs",
      icon: <TbApi />,
      id: 1,
    },
    {
      skill: "Node.js",
      icon: <FaNodeJs />,
      id: 2,
    },
    {
      skill: "Express.js",
      icon: <SiExpress />,
      id: 3,
    },
    {
      skill: "PostgreSql",
      icon: <SiPostgresql />,
      id: 4,
    },
    {
      skill: "Sequelize",
      icon: <SiSequelize />,
      id: 5,
    },
    {
      skill: "MongoDB",
      icon: <SiMongodb />,
      id: 6,
    },
  ];

  return (
    <ContainerLayout>
      <Photo />
      <About />
      <ContainerPortfolio>
        <Portfolio data={dataProjects} />
      </ContainerPortfolio>
      <ContainerSkills>
        <Skills data={dataFrontEndSkills} title="Front-end Proficiencies" />
        <Skills data={dataBackEndSkills} title="Back-end Proficiencies" />
      </ContainerSkills>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </ContainerLayout>
  );
};

const ContainerLayout = styled.div`
  padding: 10px;
  background-color: rgb(230, 226, 223);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ContainerPortfolio = styled.div`
  margin: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  width: 65%;
`;

const ContainerSkills = styled.div`
  margin: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  height: 100%;
`;

const ContainerFooter = styled.div`
  margin: 10px 40px;
  background-color: white;
  border-radius: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default MainLayout;

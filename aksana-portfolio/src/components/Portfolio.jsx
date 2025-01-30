import ProjectItem from "./PortfolioItem";
import styled from "styled-components";

export const Portfolio = ({ data }) => {
  const projectCards = data.map((item) => {
    const { id, ...itemProps } = item;
    return <ProjectItem key={id} {...itemProps} />;
  });
  return <StyledProjectContainer>{projectCards}</StyledProjectContainer>;
};

const StyledProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default Portfolio;

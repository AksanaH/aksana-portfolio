import styled from "styled-components";

export const Skill = ({ skill, icon }) => {
  return (
    <>
      <StyledSkillItem>
        {icon}
        {skill}
      </StyledSkillItem>
    </>
  );
};

const StyledSkillItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    margin: 0;
  }
`;

export default Skill;

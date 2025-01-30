import ListGroup from "react-bootstrap/ListGroup";
import Skill from "./SkillItem";

export const Skills = ({ data, title }) => {
  const skillRows = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <ListGroup.Item key={id} variant="info">
        <Skill {...itemProps} />
      </ListGroup.Item>
    );
  });
  return (
    <ListGroup style={{ margin: "20px" }}>
      <ListGroup.Item>{title}</ListGroup.Item>
      {skillRows}
    </ListGroup>
  );
};

export default Skills;

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

const ProjectItem = ({
  name,
  technologies,
  src,
  website,
  github,
  description,
}) => {
  return (
    <StyledCard>
      <StyledCardImg variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <StyledCardText>{description}</StyledCardText>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{technologies}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={website}>Go to website</Card.Link>
        <Card.Link href={github}>
          <i className="fab fa-github contact"></i> GitHub
        </Card.Link>
      </Card.Body>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 19rem;
  margin: 50px 0px;
  background-color: rgb(215, 228, 228);
`;

const StyledCardText = styled(Card.Text)`
  height: 5rem;
`;

const StyledCardImg = styled(Card.Img)`
  height: 10rem;
`;

export default ProjectItem;

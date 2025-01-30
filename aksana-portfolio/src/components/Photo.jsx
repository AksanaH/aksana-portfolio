import styled from "styled-components";
import Card from "react-bootstrap/Card";

const Photo = () => {
  return (
    <StyledCard>
      <ContainerAvatar>
        <StyledPhoto>
          <Card.Img variant="top" src="/images/avatar.jpeg" />
        </StyledPhoto>
        <Card.Body>
          <Card.Title>Aksana Hlebik</Card.Title>
        </Card.Body>
      </ContainerAvatar>
    </StyledCard>
  );
};

const StyledPhoto = styled.div`
  img {
    height: 10rem;
    border-radius: 50%;
  }
`;

const ContainerAvatar = styled.div`
  height: 15rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

const StyledCard = styled(Card)`
  width: 15rem;
  height: 17rem;
  border-radius: 20px;
`;

export default Photo;

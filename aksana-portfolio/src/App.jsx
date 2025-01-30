import styled from "styled-components";
import MainLayout from "./components/MainLayout";

import "./App.css";

function App() {
  return (
    <StyledApp>
      <StyledLayout>
        <MainLayout />
      </StyledLayout>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-image: url("/images/background.jpg");
  background-size: cover;
  min-height: 100vh;
  font-family: "Gill Sans Extrabold", sans-serif;
`;

const StyledLayout = styled.div`
  width: 70%;
  margin: 20px auto;
`;

export default App;

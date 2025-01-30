import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledContact id="contact">
      <a href="https://github.com/AksanaH">
        <StyledIcon>
          <FaGithub />
        </StyledIcon>
      </a>
      <a href="https://www.linkedin.com/in/aksana-hlebik-6b5969312/">
        <StyledIcon>
          <FaLinkedin />
        </StyledIcon>
      </a>
    </StyledContact>
  );
};

const StyledIcon = styled.div`
  font-size: 2rem;
  margin: 0 10px;
  color: black;
`;

const StyledContact = styled.div`
  display: flex;
`;

export default Footer;

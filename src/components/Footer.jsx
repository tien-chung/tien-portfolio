import { Container } from "react-bootstrap";
import linkedIcon from "../assets/img/linkedin.png";
import githubIcon from "../assets/img/github.png";
import { FOOTER_COPYRIGHT, GITHUB_LINK, LINKEDIN_LINK } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="text-center">
        <div className="social-icon">
          <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer"><img src={linkedIcon} alt="LinkedIn Icon" /></a>
          <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Github Icon" /></a>
        </div>
        <p>{FOOTER_COPYRIGHT}</p>
      </Container>
    </footer>
  )
}

export default Footer;

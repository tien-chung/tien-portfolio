import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import {
  CONNECT,
  HOME,
  LETS_CONNECT,
  PROJECTS,
  SKILLS,
  TIEN_CHUNG
} from "../utils/constants";

const NavBar = () => {

  const [activeLink, setActiveLink] = useState(`${HOME}`);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand>
            <span className="logo">{TIEN_CHUNG}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href={`#${HOME}`} className={activeLink === `${HOME}` ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(HOME)}>{HOME}</Nav.Link>
              <Nav.Link href={`#${SKILLS}`} className={activeLink === `${SKILLS}` ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(SKILLS)}>{SKILLS}</Nav.Link>
              <Nav.Link href={`#${PROJECTS}`} className={activeLink === `${PROJECTS}` ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(PROJECTS)}>{PROJECTS}</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to={`#${CONNECT}`}>
                <button className="vvd"><span>{LETS_CONNECT}</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar;
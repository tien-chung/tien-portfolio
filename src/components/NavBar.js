import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
  CONNECT,
  ABOUT,
  LETS_CONNECT,
  PROJECTS,
  CERTS,
} from "../utils/constants";
import logo from '../assets/img/t.png';

const NavBar = () => {

  const [activeLink, setActiveLink] = useState(`${ABOUT}`);
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
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand>
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href={`#${ABOUT}`} className={activeLink === `${ABOUT}` ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(ABOUT)}>{ABOUT}</Nav.Link>
            <Nav.Link href={`#${CERTS}`} className={activeLink === `${CERTS}` ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(CERTS)}>{CERTS}</Nav.Link>
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
  );
}

export default NavBar;

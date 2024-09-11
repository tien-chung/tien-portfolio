import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import {
  ABOUT,
  LETS_CONNECT,
  ACHIEVEMENTS,
  EXPERIENCE,
} from '../utils/constants';
import logo from '../assets/img/t.png';
import { useNavigate } from 'react-router-dom';
import { navigateToUrl } from '../utils';

const NavBar = () => {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState(`${ABOUT}`);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand>
          <button onClick={() => navigate('/Home')}>
            <img className="logo" src={logo} alt="logo" />
          </button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={HashLink} 
              smooth 
              to={`/Home#${ABOUT}`} 
              className={activeLink === `${ABOUT}` ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink(ABOUT)}
            >
              {ABOUT}
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/Home#Experience" 
              className={activeLink === `${EXPERIENCE}` ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink(EXPERIENCE)}
            >
              {EXPERIENCE}
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to={`/Home#${ACHIEVEMENTS}`} 
              className={activeLink === `${ACHIEVEMENTS}` ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink(ACHIEVEMENTS)}
            >
              {ACHIEVEMENTS}
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            {/* <HashLink smooth to={`#${CONNECT}`}> */}
            <button onClick={() => navigateToUrl('https://www.linkedin.com/in/tchung24/')}><span>{LETS_CONNECT}</span></button>
            {/* </HashLink> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/tien.jpg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { 
  WELCOME_MSG,
  NAME,
  ROLE,
  INTRODUCTION_P1,
  LETS_CONNECT,
  TIEN_CHUNG,
  LINKEDIN_LINK,
} from '../utils/constants';
import { navigateToUrl } from '../utils';

const Banner = () => {
  return (
    <section className="banner" id="About">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="p-3">
            <span className="tagline">{WELCOME_MSG}</span>
            <h1>{NAME}{TIEN_CHUNG}</h1>
            <h2 className="text">{ROLE}</h2>
            <p>{INTRODUCTION_P1}</p>
            <button onClick={() => navigateToUrl(LINKEDIN_LINK)}>{LETS_CONNECT}<ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Tien's header img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;
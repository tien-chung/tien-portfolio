/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import {
  GITHUB_LINK,
  PROJECTS,
  PROJECTS_DES,
  PROJECTS_INFO,
} from '../utils/constants';
import Footer from '../components/Footer';

const Project = () => {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <>
      <NavBar />
      <Container className="edProj">
        <span className="tagline">{PROJECTS}</span>
        <Row className="justify-content-center">
          <Col xl={8} className="text-center">
            <div className="section-title mb-4">
              <div className="text-muted mx-auto para-desc mt-4">
                {PROJECTS_DES.map((des, index) => (
                  <p key={index}>{des}</p>
                ))}
                <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">GitHub!</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="project-grid">
          {PROJECTS_INFO.map((info, index) => (
            <Col xs={12} md={6} xl={4} key={index} className="project-card">
              <div className="project-content">
                <div className="project-image-container">
                  <img src={info.imgSrc} alt={info.imgAlt} className="project-image" />
                </div>
                <h3 className="project-title">{info.title}</h3>
                <p className="project-description">{info.desc}</p>
                <p className="project-items">{info.items}</p>
                <a className="project-link" href={info.link}>{info.linkTitle}</a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Project;

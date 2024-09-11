import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import { EDUCATION_EXP, EXPERIENCE_DES, PROJECT_EXP, WORK_EXP } from '../utils/constants';
import ExperienceCard from './ExperienceCard';
import { useNavigate } from 'react-router-dom';

const Experience = () => {  
  const navigate = useNavigate();
  
  return (
    <section className="experience" id="Experience">
      <Container>
        <h2>Learning & Growth Journey</h2>
        <p>{EXPERIENCE_DES}</p>
        <Row className="center">
          <Col xs={12} md={4}>
            <h3>Education</h3>
            <button onClick={() => navigate('/Education')}>
              <ExperienceCard 
                title={EDUCATION_EXP[0].title} 
                description={EDUCATION_EXP[0].description} 
                imgUrl={EDUCATION_EXP[0].imgUrl} 
              />
            </button>
          </Col>
          <Col xs={12} md={4}>
            <h3>Work Experience</h3>
            <button onClick={() => navigate('/Work')}>
              <ExperienceCard 
                title={WORK_EXP[0].title} 
                description={WORK_EXP[0].description} 
                imgUrl={WORK_EXP[0].imgUrl} 
              />
            </button>
          </Col>
          <Col xs={12} md={4}>
            <h3>Personal Projects</h3>
            <button onClick={() => navigate('/Project')}>
              <ExperienceCard 
                title={PROJECT_EXP[0].title} 
                description={PROJECT_EXP[0].description} 
                imgUrl={PROJECT_EXP[0].imgUrl} 
              />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience;
import { useEffect } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import {
  COURSEWORKS,
  EDUCATION,
  FEATURE,
  FEATURE_CHECKOUT,
  FEATURE_DES,
  FEATURE_LINK,
  RELATED_COURSEWORK,
  UNIVERSITY_INFO,
} from '../utils/constants';
import suffolkNewsImg from '../assets/img/suffolkNews.png';

const Education = () => {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  const half = Math.ceil(COURSEWORKS.length / 2);
  const firstHalf = COURSEWORKS.slice(0, half);
  const secondHalf = COURSEWORKS.slice(half);
  
  return (
    <>
      <NavBar />
      <Container className="edProj">
        <span className="tagline">{EDUCATION}</span>
        <Row>
            {UNIVERSITY_INFO.map((info, index) => (
              <>
                <Col xs={12} md={6} xl={4} className="card-custom">
                  <Card
                    key={index}
                    {...info}
                  />
                </Col>
                <Col xs={12} md={6} xl={8} className="coursework-and-newspaper">
                  <div>
                    <h2>{RELATED_COURSEWORK}</h2>
                    <Row>
                      <Col xl={6}>
                        <ul className="coursework-list">
                          {firstHalf.map((course, index) => (
                            <li key={index}>
                              {course}
                            </li>
                          ))}
                        </ul>
                      </Col>
                      <Col xl={6}>
                        <ul className="">
                          {secondHalf.map((course, index) => (
                            <li key={index}>
                              {course}
                            </li>
                          ))}
                        </ul>
                      </Col>
                    </Row>
                  </div>
                  <div className="newspaper-feature">
                    <h2>{FEATURE}</h2>
                    <p>{FEATURE_DES}</p>
                    <img src={suffolkNewsImg} alt="Newspaper Feature" />
                    <a href={FEATURE_LINK} target="_blank" rel="noopener noreferrer">
                      <p>{FEATURE_CHECKOUT}</p>
                    </a>
                  </div>
                </Col>
              </>
            ))}
        </Row>
      </Container>
    </>
  )
}

export default Education;

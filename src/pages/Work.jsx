import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Container, Row } from 'react-bootstrap';
import { WORK } from '../utils/constants';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

const Work = () => {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <NavBar />
      <Container className="work">
        <span className="tagline">{WORK}</span>
        <Row>
          <Timeline/>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Work;

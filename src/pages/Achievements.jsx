import NavBar from '../components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import { achievementsImg } from '../utils/imageConstants';

const Achievements = () => {
  window.scrollTo(0,0);
  
  return (
    <>
      <NavBar />
      <Container className="achievement-page">
        <span className="tagline">
          Achievements
        </span>
        <Row>
          {achievementsImg.map((achievement) => (
            <Col xs={12} md={4} sm={6} key={achievement.alt} className="img">
              <img src={achievement.src} alt={achievement.alt}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Achievements;
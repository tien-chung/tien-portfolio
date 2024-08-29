import NavBar from '../components/NavBar';
import { Container } from 'react-bootstrap';

const Work = () => {
  window.scrollTo(0,0);

  return (
    <>
      <NavBar />
      <Container className="achievement-page">
        <span className="tagline">
          Work Experience
        </span>
      </Container>
    </>
  )
}

export default Work;
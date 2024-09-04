import NavBar from '../components/NavBar';
import { Container } from 'react-bootstrap';

const Project = () => {
  window.scrollTo(0,0);

  return (
    <>
      <NavBar />
      <Container className="achievement-page">
        <span className="tagline">
          Personal Project
        </span>
      </Container>
    </>
  )
}

export default Project;

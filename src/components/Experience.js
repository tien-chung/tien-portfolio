import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { EXPERIENCE_DES } from "../utils/constants";
import workImg from '../assets/img/work.jpg';
import projectImg from '../assets/img/project.jpeg';
import educationImg from '../assets/img/school.jpeg';
import ExperienceCard from "./ExperienceCard";
import { useNavigate } from "react-router-dom";

const Experience = () => {  
  const navigate = useNavigate();
  
  const education = [
    {
      title: "College Journey",
      description: "BS in Computer Science",
      imgUrl: educationImg,
    },
  ]
  
  const work = [
    {
      title: "Work Experiences",
      description: "Full Stack Developer",
      imgUrl: workImg,
    },
  ]
  
  const project = [
    {
      title: "Personal Projects",
      description: "Projects",
      imgUrl: projectImg,
    },
  ]
  
  return (
    <section className="experience" id="Experience">
      <Container>
        <h2>Learning & Growth Journey</h2>
        <p>{EXPERIENCE_DES}</p>
        <Row className="center">
          <Col xs={12} md={4}>
            <h3>Education</h3>
            <button onClick={() => navigate('/Education')}>
              {
                education.map((project, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      {...project}
                      />
                  )
                })
              }
            </button>
          </Col>
          <Col xs={12} md={4}>
            <h3>Work Experience</h3>
            <button onClick={() => navigate('/Work')}>
              {
                work.map((project, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      {...project}
                      />
                  )
                })
              }
            </button>
          </Col>
          <Col xs={12} md={4}>
            <h3>Personal Projects</h3>
            <button onClick={() => navigate('/Project')}>
              {
                project.map((project, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      {...project}
                      />
                  )
                })
              }
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience;
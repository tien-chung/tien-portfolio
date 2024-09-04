import '../Timeline.css';
import { Container, Row, Col } from "react-bootstrap";
import TimelineItem from './TimelineItem';
import { WORK_EXPERIENCE_DES, WORK_TIMELINE } from '../utils/constants';

const Timeline = () => {

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xl={6} className="text-center">
          <div className="section-title mb-4">
            <div className="text-muted mx-auto para-desc mt-4">
            {WORK_EXPERIENCE_DES.map((des, index) => (
              <p key={index}>{des}</p>
            ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="timeline-page position-relative">
            {WORK_TIMELINE.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;

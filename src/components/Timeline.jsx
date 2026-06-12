import React from 'react';
import '../Timeline.css';
import { Container, Row, Col } from 'react-bootstrap';
import TimelineItem from './TimelineItem';
import { WORK_TIMELINE } from '../utils/constants';

const Timeline = () => {
  return (
    <Container>
      <Row className="justify-content-center">
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

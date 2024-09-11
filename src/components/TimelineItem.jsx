import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TimelineItem = ({ title, role, duration, logo, description, reverse, skills }) => (
  <div className="timeline-item mt-5 pt-4">
    <Row className={reverse ? 'flex-row-reverse' : ''}>
      <Col lg={6} md={6} sm={6} className="mt-4 mt-sm-0">
        <div className={`duration ${reverse ? 'duration-right' : 'date-label-left'} position-relative ${reverse ? '' : 'text-md-end'}`}>
          <img src={logo} alt={`${title} logo`} />
          <h5 className="my-2">{title}</h5>
          <small className="text-muted mb-0">{duration}</small>
        </div>
      </Col>
      <Col lg={6} md={6} sm={6} className="mt-4 mt-sm-0">
        <div className={`event ${reverse ? 'event-description-left' : 'event-description-right'} float-left text-${reverse ? 'end' : 'start'}`}>
          <h6 className="title mb-1 text-capitalize">{role}</h6>
          <p className="timeline-subtitle mt-3 mb-0 text-muted">{description}</p>
          <p className="timeline-subtitle mt-3 mb-0 text-muted">{`Skills: ${skills}`}</p>
        </div>
      </Col>
    </Row>
  </div>
);

export default TimelineItem;

TimelineItem.propTypes = {
  title: PropTypes.string,
  role: PropTypes.string,
  duration: PropTypes.string,
  logo: PropTypes.string,
  description: PropTypes.string,
  reverse: PropTypes.bool,
  skills: PropTypes.string,
}

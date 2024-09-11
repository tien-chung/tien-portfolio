import React from 'react';
import PropTypes from 'prop-types';

const ExperienceCard = ({ title, description, imgUrl }) => {
  return (
    <div className="experience-imgbx">
      <img src={imgUrl} alt={title}/>
      <div className="experience-txtx">
        <h4>{title}</h4>
        {description.map((desc, index) => (
          <div key={index}>{desc}</div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;

ExperienceCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
}

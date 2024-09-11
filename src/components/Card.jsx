import React from 'react';
import PropTypes from 'prop-types';

const Card = ({imgSrc, imgAlt, title, desc, items, link, linkTitle }) => {
  return (
    <div className="card color card-border">
      <img src={imgSrc} className="card-img-top" alt={imgAlt}/>
      <div className="card-body">
        <h5 className="card-title color">{title}</h5>
        <p className="card-text color">{desc}</p>
      </div>
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li key={index} className="list-group-item color">{item}</li>
        ))}
      </ul>
      <div className="card-body">
        <a href={link} target="_blank" rel="noopener noreferrer">{linkTitle}</a>
      </div>
    </div>
  )
}

export default Card;

Card.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  items: PropTypes.array,
  link: PropTypes.string,
  linkTitle: PropTypes.string,
}

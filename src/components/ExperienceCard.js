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

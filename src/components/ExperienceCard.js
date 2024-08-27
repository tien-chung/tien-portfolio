const ExperienceCard = ({ title, description, imgUrl }) => {
  return (
      <div className="experience-imgbx">
        <img src={imgUrl} alt={description}/>
        <div className="experience-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
  )
}

export default ExperienceCard;
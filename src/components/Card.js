const Card = ({imgSrc, imgAlt, title, desc, items, link, linkTitle }) => {
  return (
    <div className="card color card-border ">
      <img src={imgSrc} className="card-img-top" alt={imgAlt}/>
      <div className="card-body">
        <h5 className="card-title color">{title}</h5>
        <p className="card-text color">{desc}</p>
      </div>
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
            <li className="list-group-item color">{item}</li>
          ))}
      </ul>
      <div className="card-body">
        <a href={link}>{linkTitle}</a>
      </div>
    </div>
  )
}

export default Card;

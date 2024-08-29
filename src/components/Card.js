const Card = ({imgSrc, imgAlt, title, desc, items, link, linkTitle }) => {
  return (
    <div className="card color">
      <img src={imgSrc} className="card-img-top" alt={imgAlt}/>
      <div class="card-body bg-color">
        <h5 class="card-title color">{title}</h5>
        <p class="card-text color ">{desc}</p>
      </div>
      <ul class="list-group list-group-flush">
        {items.map((item, index) => (
            <li class="list-group-item color">{item}</li>
          ))}
      </ul>
      <div class="card-body">
        <a href={link} className="card-link-color">{linkTitle}</a>
      </div>
    </div>
  )
}

export default Card;

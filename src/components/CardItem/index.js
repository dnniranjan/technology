import './index.css'

const CardItem = props => {
  const {cardList} = props
  const {title, description, imgUrl, className} = cardList
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="position">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem

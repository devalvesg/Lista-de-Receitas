import "../css/card.css"

interface CardProps {
  strMeal: string,
  strMealThumb: string,
  strArea: string,
  strCategory: string,
  strYoutube: string,
}

function Card(props: CardProps) {
  const { strMeal, strMealThumb, strArea, strCategory, strYoutube } = props;


  return (
    <div className="card-container">
      <img className="card-img" src={strMealThumb} alt="" />
      <div className="card-description">
        <h1>{strMeal}</h1>
        <div className="card-infos">
          <h4>{strCategory}</h4>
          <h4>{strArea}</h4>
        </div>
      </div>
      <div className="card-buttons">
        <button className="card-button"><a target="_blank" href={strYoutube}>YOUTUBE</a></button>
        <button className="card-button"><a href="#">RECIPE</a></button>
      </div>
    </div>
  )
}

export default Card
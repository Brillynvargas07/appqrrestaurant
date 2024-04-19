export default function CardRestaurant({title, imgUrl}) {
  return (
    <>
    <a className="contianer-card__card">
        <div className="card__card-img">
            <img className="card-img__img" src={imgUrl} alt="img"/>
        </div>
        <div className="card__content-card">
            <div className="content-card__container-text">
                <h3 className="content-card__title">{title}</h3>
            </div>
        </div>
    </a>
    </>
  );
}

/*

<div className="restauranst-content-card">
      <div className="restauranst-mask-img">
        <img
          className="restauranst-img"
          src={imgUrl}
        />
      </div>
      <div className="restaurant-content-title">{title}</div>
    </div>
*/
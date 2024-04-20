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

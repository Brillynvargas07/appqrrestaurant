import CardRestaurant from "./cardRestaurant";

export default function SectionRestaurantExample() {
  return (
    <section className="section-restaurants">
      <div className="restaurants-container">
        <div className="restauranst-header">
          <h1 className="restauranst-header-title">
            Restaurantes mas visitados
          </h1>
        </div>
        <div className="restauranst-content">
          <CardRestaurant
            title={"LinkMore"}
            imgUrl={
              "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/2K7FHLJP75FGRO2LKQMCFKFKWA.jpg"
            }
          />
          <CardRestaurant
            title={"SalchiBBQ"}
            imgUrl={
              "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/2K7FHLJP75FGRO2LKQMCFKFKWA.jpg"
            }
          />
          <CardRestaurant
            title={"MotoSi"}
            imgUrl={
              "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/2K7FHLJP75FGRO2LKQMCFKFKWA.jpg"
            }
          />
        </div>
      </div>
    </section>
  );
}

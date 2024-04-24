import SectionPrincipal from "../content/sectionPrincipal";
import Footer from "../footer/footer";
import SectionRestaurantExample from "../restaurants/sectionRestaurantExample";

function Home() {
  return (
    <>
      <SectionPrincipal to={"/"} />
      <SectionRestaurantExample />
      <Footer />
    </>
  );
}

export default Home;

import SectionPrincipal from "./content/sectionPrincipal";
import Footer from "./footer/footer";
import MenuNav from "./nav/menuNav";
import SectionRestaurantExample from "./restaurants/sectionRestaurantExample";

function Home(){
    return(
        <>
        <MenuNav/>
        <SectionPrincipal to={"/"}/>
        <SectionRestaurantExample/>
        <Footer/>
        </>
    )
}

export default Home;
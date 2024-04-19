import SectionPrincipal from "./content/sectionPrincipal";
import Footer from "./footer/footer";
import MenuNav from "./nav/menuNav";

function Home(){
    return(
        <>
        <MenuNav/>
        <SectionPrincipal/>
        <Footer/>
        </>
    )
}

export default Home;
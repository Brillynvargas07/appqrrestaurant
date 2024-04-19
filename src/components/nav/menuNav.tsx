import ButtonPrincipal from "../button/buttonPrincipal";
import ButtonSecundary from "../button/buttonSecundary";
import NavItem from "./navItem";
import TitleIcon from "./titleIcon";

export default function MenuNav(){
    
    return(
        <header className="header_navitem">
            <div className="section-content-icon">
                <TitleIcon/>
            </div>
            <div className="section-container-navitem">
                <NavItem to={"/"} name={"Inicio"}/>
                <NavItem to={"/"} name={"Restaurantes"}/>
            </div>
            <div className="section-container-btn">
                <ButtonPrincipal to={"/"}/>
                <ButtonSecundary to={"/"}/>
            </div>
        </header>
    )
}
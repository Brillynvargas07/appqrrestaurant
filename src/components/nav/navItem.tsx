import { Link } from "react-router-dom";

export default function NavItem({name, to}){
    return(
        <div className="container-navitem">
            <Link to={to} className="navitem-element">{name}</Link>
        </div>
    )
}
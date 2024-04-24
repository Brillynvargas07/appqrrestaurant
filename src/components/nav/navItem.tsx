import { Link } from "react-router-dom";

interface Props{
    name: string;
    to: string;
}
export default function NavItem({name, to}: Props){
    return(
        <div className="container-navitem">
            <Link to={to} className="navitem-element">{name}</Link>
        </div>
    )
}
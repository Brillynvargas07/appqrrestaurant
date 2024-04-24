import { Link } from "react-router-dom";

export default function ButtonPrincipal({to}: {to: string}){
    return(
        <div className="container-btn">
            <Link to={to} className="btn-principal">Ingresar</Link>
        </div>
    )
}
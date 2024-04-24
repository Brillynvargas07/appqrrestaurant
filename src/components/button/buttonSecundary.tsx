import { Link } from "react-router-dom";

export default function ButtonSecundary({to}: {to: string}){
    return(
        <div className="container-btn container-btn--secundary">
            <Link to={to} className="btn-principal btn-principal--secundary">Registrar</Link>
        </div>
    )
}
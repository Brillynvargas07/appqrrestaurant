import { Link } from "react-router-dom";

export default function ButtonPrincipal({to}){
    return(
        <div className="container-btn">
            <Link to={to} className="btn-principal">Ingresar</Link>
        </div>
    )
}

/*
<div >
    <div style={{color: '#03045E', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Registrar</div>
</div>
*/
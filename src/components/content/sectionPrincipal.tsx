import { Link } from "react-router-dom";

export default function SectionPrincipal({to}){
    return(
        <div className="section-princial">
            <div className="principal-conteinter">
                <div className="principal-info">
                    <h1 className="principal-title">Menus con Codigos QR</h1>
                    <div className="container-btn">
                        <Link to={to} className="btn-principal">Empieza ahora aqui</Link>
                    </div>
                </div>
                <img className="principal-img" src="https://elementdesign.com.co/wp-content/uploads/2021/08/persona-menu-digital-1.png"/>
            </div>
        </div>

    )
}
import { useState } from "react";
import CardProduct from "../cards/cardProduct";

export default function Product(){
    const [qrExist, setQrExist] = useState(false);

    const data= [
        {title: "Gaseosa", description: "Manzana 2lt", price:"$5.000", to:""},
        {title: "Gaseosa", description: "Manzana 2lt", price:"$5.000", to:""},
        {title: "Gaseosa", description: "Manzana 2lt", price:"$5.000", to:""},
        {title: "Gaseosa", description: "Manzana 2lt", price:"$5.000", to:""},
        {title: "Gaseosa", description: "Manzana 2lt", price:"$5.000", to:""},
        {title: "Gaseosa", description: "Manzana 2lt", price:"$5.000", to:""},
        {title: "Gaseosa", description: "Manzana 2lt", price:"$5.000", to:""},
        {title: "Gaseosa", description: "Manzana 2lt", price:"$5.000", to:""},
    ]

    const generatQR = () =>{
        if(qrExist) setQrExist(false);
        else setQrExist(true);
        console.log(qrExist);
    }


    return(
        <>
        <main className="main-container">
            <header>
                <div className="separator">
                <div className="info">
                    <h3>Gestion del menu</h3>
                    <a href="#">Agrege un producto a su menu</a>
                </div>
                </div>
            </header>

            <div className="menu-products__proucts">
                {data.map((item, index) => (
                    <CardProduct key={index}
                    title={item.title}
                    subtitle={item.description}
                    price={item.price}
                    to={item.to}/>
                ))}
            </div>
        </main>
        <div className="qr-container">
            <div className="qr__container-img">
                <img className="qr__img" src={qrExist ? "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC": "https://via.placeholder.com/149x155"} />
            </div>
            <div onClick={generatQR} className="qr__btn-container">
                <div className="qr__btn">Generar QR</div>
            </div>
            <div className="qr__btn-container">
                <div className="qr__btn">Descargar QR</div>
            </div>
        </div>
        </>
    );
}
import { Link } from "react-router-dom";

interface Props{
    title: string;
    subtitle: string;
    price: string;
    to: string;
}
export default function CardProduct({ title, subtitle, price, to }: Props) {
    return(
        <div className="card__container">
            <div className="card__header">
                <h2 className="card__title">{title}</h2>
                <h3 className="card__subtitle">{subtitle}</h3>
            </div>
            <Link className="card__btn-container" to={to}>
                <h4 className="card__price">{price}</h4>
                <div className="card__icon-container">
                    <h1 className="card__icon">+</h1>
                </div>
            </Link>
        </div>
    )
}
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface Props{
    textButton: string;
    textLink: string;
    text: string;
    to: string;
    toButton: string;
    onClick: MouseEventHandler<HTMLAnchorElement>;
}
export default function ButtonACss({textButton, textLink, text, to, toButton, onClick}: Props){
    return(
        <div className="login__form-container login__form-container--btn-gap">
            <Link to={toButton} onClick={onClick} className="login__form-btn" type="submit"><span className="login__form-btn--txt">{textButton}</span></Link>
            <p className="login__form-text">{text} <Link to={to} className="login__link">{textLink}</Link></p>
        </div>
    )
}
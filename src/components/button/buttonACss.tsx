import { Link } from "react-router-dom";

interface Props{
    textButton: string;
    textLink: string;
    text: string;
    to: string;
}
export default function ButtonACss({textButton, textLink, text, to}: Props){
    return(
        <div className="login__form-container login__form-container--btn-gap">
            <button className="login__form-btn" type="submit"><span className="login__form-btn--txt">{textButton}</span></button>
            <p className="login__form-text">{text} <Link to={to} className="login__link">{textLink}</Link></p>
        </div>
    )
}

export default function Text({text, type}){
    return(
        <input className="login__form-input" type={type} placeholder={text}/>
    )
}
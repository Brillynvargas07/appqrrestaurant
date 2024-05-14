
export default function Text({text, type}: {text: string; type: string}){
    return(
        <input className="login__form-input" type={type} placeholder={text}/>
    )
}
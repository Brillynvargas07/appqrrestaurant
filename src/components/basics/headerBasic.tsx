interface Props{
    text1: string;
    text2: string;
}

export default function HeaderBasic({text, text2}: Props){
    return (
        <header className="login__header">
                    <h2 className="login__title">
                        {text} <br/> {text2}
                    </h2>
                </header>
    )
}
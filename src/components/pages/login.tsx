import ButtonACss from "../button/buttonACss";
import Text from "../input/text";
import HeaderBasic from "../basics/headerBasic";

export default function Login(){
    const onClick = () => {
        localStorage.setItem("login", "true");
    }

    return(
        <section className="login">
            <div className="login__container">
                <HeaderBasic text="Iniciar sesion" text2="para continuar el viaje"/>
                <div className="login__content">
                    <h4 className="login__form-title">Ingresa tus datos para continuar</h4>
                    <form className="login__form">
                        <div className="login__form-container">
                            <Text text="correo" type="email"/>
                            <Text text="contraseña" type="password" />
                        </div>
                        <ButtonACss
                        onClick={onClick} 
                        text="¿No tienes cuenta? para registrarte da click"
                        textLink="Aqui"
                        textButton="Iniciar sesion"
                        to="/sign-in"
                        toButton="/dashboard"/>
                    </form>
                </div>
            </div>
        </section>
    )
}
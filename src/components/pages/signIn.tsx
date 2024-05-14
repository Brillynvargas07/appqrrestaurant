import HeaderBasic from "../basics/headerBasic";
import ButtonACss from "../button/buttonACss";
import Text from "../input/text";

export default function SignIn(){
    return(
        <section className="login">
            <div className="login__container">
                <HeaderBasic text="Registrarse" text2="para empezar el viaje"/>
                <div className="login__content">
                    <h4 className="login__form-title">Ingresa tus datos para continuar</h4>
                    <form className="login__form">
                        <div className="login__form-container">
                            <Text text="correo" type="email"/>
                            <Text text="contraseña" type="password" />
                            <Text text="repetir contraseña" type="password" />
                        </div>
                        <ButtonACss 
                        text="¿Ya tienes una cuenta? para iniciar sesion da click"
                        textLink="Aqui"
                        textButton="Registrarte"
                        to="/login"
                        toButton="/login"
                        onClick={() => console.log("👍")}/>
                    </form>
                </div>
            </div>
        </section>
    )
}
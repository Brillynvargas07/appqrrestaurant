import FooterBottom from "./footerBottom";
import FooterSectionContact from "./footerSectionContact";
import FooterSectionService from "./footerSectionService";
import ItemFooterSocial from "./itemFooterSocial";

export default function Footer(){
    return( 
        <footer className="layout__footer">
            <div className="footer__container">
                <section className="footer__top">
                    <ul className="footer__social">
                        <ItemFooterSocial icon={"fa-brands fa-facebook-f"} />
                        <ItemFooterSocial icon={"fa-brands fa-twitter"} />
                        <ItemFooterSocial icon={"fa-brands fa-youtube"} />
                        <ItemFooterSocial icon={"fa-brands fa-instagram"} />
                    </ul>
                </section>
    
                <section className="footer__main">
                    <FooterSectionContact/>
    
                    <FooterSectionService/>
                </section>
    
                <section className="footer__bottom">
                    <FooterBottom/>
                </section>
            </div>
        </footer>
    )
}
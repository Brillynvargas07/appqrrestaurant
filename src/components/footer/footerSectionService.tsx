import SectionService from "./sectionService";

export default function FooterSectionService() {

    const service:string[] = ["Menus interactivos", "Gestion de mesas", "Estrategias tecnologicas"]
    const tecnology:string[] = ["Generacion QR", "Database"]
    const legal:string[] = ["Contacto", "Politica y privacidad", "Terminos de uso"]
  return (
    <section className="footer__fright">
      <SectionService title={"Servicios"} cssPersonalice={"footer__widget--50"} titles={service}/>
      <SectionService title={"Tecnologia"} cssPersonalice={"footer__widget--25"} titles={tecnology}/>
      <SectionService title={"Legal"} cssPersonalice={"footer__widget--25"} titles={legal}/>
    </section>
  );
}

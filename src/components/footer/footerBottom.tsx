export default function FooterBottom() {
  return (
    <>
      <div className="footer__copyright">
        <span className="copyright__text">
          &copy; 2024. Todos los derechos reservados a{" "}
          <a className="copyright__link" href="#">
            Brillyn Vargas
          </a>
        </span>
      </div>

      <div className="footer__links">
        <ul className="footer__flinks">
          <li className="flinks__item flinks__item--separate">
            <a className="flinks__title" href="#">
              Politica de privacidad
            </a>
          </li>
          <li className="flinks__item">
            <a className="flinks__title" href="#">
              Terminos de uso
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

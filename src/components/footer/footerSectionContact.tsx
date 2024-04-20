export default function FooterSectionContact() {
  return (
    <section className="footer__fleft">
      <div className="fleft__container">
        <h2 className="fleft__title">Contactanos</h2>
        <p className="fleft__description">
          El objetivo de este sistema es mejorar la infraestrucutra de las
          empresas locales para entregerles tecnologia sin gastos excesivos
        </p>

        <form className="fleft__form" action="">
          <div className="fleft__group">
            <span className="fleft__mail-icon">
              <i className="fleft__icon fa-solid fa-envelope-open-text"></i>
            </span>
            <input
              className="fleft__forn-control"
              type="text"
              placeholder="Correo electronico"
            />
            <button className="fleft__btn" type="submit">
              Suscribete
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

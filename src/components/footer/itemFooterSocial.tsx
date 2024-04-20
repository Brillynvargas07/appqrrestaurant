export default function ItemFooterSocial({icon}) {
  return (
    <li className="social__item">
      <a className="social__link" href="#">
        <i className={`social__icon ${icon}`}></i>
      </a>
    </li>
  );
}

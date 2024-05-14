import { useState } from "react";
import "../../assets/img/profile.jpg";
import { Link, useLocation } from "react-router-dom";
import Sidemenu from "react-native";

export default function MenuSide() {
  const location = useLocation();
  const [menuSelect, setMenuSelect] =
    location.pathname === "/products" ? useState("menu") : useState("mesas");
  
  const [openMenuDropdown, setOpenMenuDropdown] = useState(false);

  const clickMenu = () => {
    setMenuSelect("menu");
  };
  const clickMesas = () => {
    setMenuSelect("mesas");
  };
  return (
    <aside className="left-section">
      <div className="logo">
        <button className="menu-btn" id="menu-close">
          <i className="bx bx-log-out-circle"></i>
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
        >
          <g clip-path="url(#clip0_132_242)">
            <path
              d="M24.0466 10.5733L16.4999 3.02667L8.95325 10.5733C4.79325 14.7333 4.79325 21.4933 8.95325 25.6533C11.0333 27.7333 13.7666 28.7733 16.4999 28.7733C19.2333 28.7733 21.9666 27.7333 24.0466 25.6533C28.2066 21.4933 28.2066 14.7333 24.0466 10.5733ZM16.4999 26.12C14.3666 26.12 12.3533 25.2933 10.8466 23.7733C9.32659 22.2533 8.49992 20.2533 8.49992 18.12C8.49992 15.9867 9.32659 13.9733 10.8466 12.4667L16.4999 6.80001V26.12Z"
              fill="#0A157A"
            />
          </g>
          <defs>
            <clipPath id="clip0_132_242">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <a href="#">Restaurant QR</a>
      </div>

      <div className="sidebar">
        <div
          onClick={clickMesas}
          className="item"
          id={menuSelect === "mesas" ? "active" : ""}
        >
          <i className="bx bx-message-square-dots"></i>
          <Link to="/dashboard">Mesas</Link>
        </div>
        <div
          onClick={clickMenu}
          className="item"
          id={menuSelect === "menu" ? "active" : ""}
        >
          <i className="bx bx-cog"></i>
          <Link to="/products">Menu</Link>
        </div>
      </div>
        {
            openMenuDropdown && (
                <DropDownMenu />
            )
        }
      <div onClick={() => setOpenMenuDropdown((prev) => !prev)} className="profile-content ">
        <div className="profile-content__container">
          <img
            className="profile-content__img"
            src="https://media.revistagq.com/photos/5fa18936d7a87a4a317ed237/1:1/w_945,h_945,c_limit/personas-seguras-de-si-mismas.jpg"
          />
          <h5 className="profile-content__name">Reza Mehdikhanlou</h5>
        </div>
      </div>
    </aside>
  );
}

function DropDownMenu() {
  // Aquí puedes agregar el contenido de tu menú
  return (
    <div className="menu-dropdown">
      <ul className="menu-dropdown__options-container">
        <li className="menu-dropdown__opt">
          <Link onClick={() => {
                localStorage.removeItem('login');
            }} className="opt__text" to={'/'}>Cerrar sesion</Link>
        </li>
      </ul>
    </div>
  );
}

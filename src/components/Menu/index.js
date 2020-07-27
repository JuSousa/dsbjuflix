import React from "react";
import Logo from "../../assets/img/logo.png";
import Button from "../ButtonLink";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="DSBJUFLIX" className="Logo" />
      </a>
      <Button name="Novo Vídeo" className="ButtonLink" link="/" />
    </nav>
  );
}

export default Menu;

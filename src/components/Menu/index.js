import React from "react";
import Button from "../Button";
import Logo from '../../assets/img/Logo.png';
import ButtonLink from "./components/ButtonLink";
import './Menu.css';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="BccFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
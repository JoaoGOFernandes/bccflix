import React from "react";
import Button from "../Button";
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import { Link } from 'react-router-dom'


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="BccFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
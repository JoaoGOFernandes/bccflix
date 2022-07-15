import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'


function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} />
      </a>
      <p>

      </p>
    </FooterBase>
  );
}

export default Footer;

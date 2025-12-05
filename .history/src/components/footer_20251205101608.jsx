import React from 'react';
import Bonta from '../assets/Ville-Bonta.png';
import Brakmar from '../assets/Ville-Brakmar.png';
import logo from '../assets/logo.png';
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="top-footer">
                <img src={Bonta} alt="Ville de Bonta" className="footer-img" />
                <div className="middle-top-footer">
                    <img src={} alt="" />
                </div>
                <img src={Brakmar} alt="Ville de Brâkmar" className="footer-img" />
            </div>

            <div className="footer-logo">
                <img src={logo} alt="Logo du site" />
            </div>
        </footer>
    );
}

export default Footer;

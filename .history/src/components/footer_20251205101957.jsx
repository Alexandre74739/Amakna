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
                    <img src={logo} alt="logo" />
                </div>
                <img src={Brakmar} alt="Ville de Brâkmar" className="footer-img" />
            </div>

            <div className="bottom-footer">
                <nav>
                    <p>© 2025 Ankama Studio.  Tous droits réservés. « Amakna » et ses services dérivés sont des  sites non-officiels sans aucun lien avec Ankama.</p>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;

import Bonta from '../assets/VilleBonta.png';
import Brakmar from '../assets/Brakmar.png';
import logo from '../assets/logo.png';
import "./Footer.scss";

function Footer () {


    return (
        <div className="top-footer-container">
            <img src={Bonta} alt="Ville-Bonta" />
            <img src={Brakmar} alt="Ville-Brakmar" />
        </div>
    )
}
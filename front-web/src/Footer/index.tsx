import './styles.css';
import {ReactComponent as YoutubeIcon} from "./youtube.svg";
import {ReactComponent as LinkedinIcon} from "./linkedin.svg";
import {ReactComponent as InstagramIcon} from "./instagram.svg";


function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="fotter-icons">
                <a href="Youtube" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="LinkedIn" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="Instagram" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
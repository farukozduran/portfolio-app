import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer(){
    return (
        <footer className="footer">
            <p>@2026 Faruk Furkan Özduran</p>
            <div className="footer-icons">
                <a href="https://github.com/farukozduran" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/farukfurkan" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="mailto:ffurkan1999@gmail.com">
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
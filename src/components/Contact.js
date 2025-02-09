import "../styles/Contact.css";

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="container contact">
            <div className="title">Contact</div>
            <div className="thanks">
                Thank you for visiting my portfolio. If you have any questions
                or would like to get in touch, please feel free to contact me.
            </div>
            <div className="contactIcons">
                <a
                    href="https://www.facebook.com/vnhsngxxx/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://www.instagram.com/svnation__/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.linkedin.com/in/svn42/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/blackat42"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

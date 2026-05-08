import "../styles/Contact.css";

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaDownload,
} from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/svn42/",
        label: "LinkedIn",
        icon: <FaLinkedin />,
    },
    {
        href: "https://github.com/blackat42",
        label: "GitHub",
        icon: <FaGithub />,
    },
    {
        href: "https://www.facebook.com/vnhsngxxx/",
        label: "Facebook",
        icon: <FaFacebook />,
    },
    {
        href: "https://www.instagram.com/svnation__/",
        label: "Instagram",
        icon: <FaInstagram />,
    },
];

export default function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-copy">
                <span className="section-kicker">Ready to build</span>
                <h2>Let us turn domain problems into practical AI solutions.</h2>
                <p>
                    Thank you for visiting my portfolio. If you are exploring
                    how AI can support a business process, product experience,
                    knowledge base, or internal workflow, I would be happy to
                    connect.
                </p>
                <a
                    href={`${process.env.PUBLIC_URL}/cv.pdf`}
                    download="Nguyen_Sang_CV.pdf"
                    className="contact-cv"
                >
                    <FaDownload />
                    Download CV
                </a>
            </div>

            <div className="contactIcons">
                {socialLinks.map((link) => (
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        key={link.label}
                    >
                        <span className="contact-icon">{link.icon}</span>
                        <span>{link.label}</span>
                        <HiOutlineArrowUpRight className="contact-arrow" />
                    </a>
                ))}
            </div>
        </section>
    );
}

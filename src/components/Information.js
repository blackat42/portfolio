import React from "react";
import { Link } from "react-scroll";
import imageSource from "../images/myportfolio.jpg";
import "../styles/Information.css";
import information from "../data/information.json";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { TbBrain, TbDatabaseSearch, TbRouteAltLeft } from "react-icons/tb";

const Information = () => {
    const heroStats = [
        { value: "2+", label: "Production years" },
        { value: "3.8", label: "Master GPA" },
        { value: "AI", label: "Cross-domain solutions" },
    ];

    const workflow = [
        {
            icon: <TbDatabaseSearch />,
            title: "Domain understanding",
            text: "Turning business knowledge, documents, APIs, and databases into clear AI-ready context.",
        },
        {
            icon: <TbBrain />,
            title: "Solution architecture",
            text: "Designing RAG, agents, tools, memory, and evaluation loops around real workflows.",
        },
        {
            icon: <TbRouteAltLeft />,
            title: "Product delivery",
            text: "Shipping AI systems through clean interfaces, reliable backend logic, and iteration.",
        },
    ];

    return (
        <section className="hero-section">
            <div className="hero-copy">
                <div className="eyebrow">
                    <HiOutlineSparkles />
                    AI solutions across domains - RAG, agents, automation
                </div>
                <h1>{information.name}</h1>
                <p className="hero-subtitle">{information.description}</p>
                <p className="hero-quote">{information.quotes}</p>

                <div className="hero-bio">
                    <p>{information.bio1}</p>
                    <p>{information.bio2}</p>
                    <p>{information.bio3}</p>
                </div>

                <div className="hero-actions">
                    <a
                        href={`${process.env.PUBLIC_URL}/cv.pdf`}
                        download="Nguyen_Sang_CV.pdf"
                        className="primary-action"
                    >
                        <FaDownload />
                        Download CV
                    </a>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="secondary-action"
                    >
                        Contact me
                        <HiOutlineArrowRight />
                    </Link>
                </div>

                <div className="social-row" aria-label="Professional links">
                    <a
                        href="https://github.com/blackat42"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/svn42/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            <div className="hero-visual" aria-label="AI portfolio preview">
                <div className="portrait-panel">
                    <img src={imageSource} alt={information.name} />
                    <div className="portrait-caption">
                        <span>AI Solutions Engineer</span>
                        <strong>Ho Chi Minh City</strong>
                    </div>
                </div>

                <div className="agent-panel">
                    <div className="agent-panel-header">
                        <span>What I build</span>
                        <span className="live-dot">solution focused</span>
                    </div>
                    {workflow.map((item) => (
                        <div className="workflow-item" key={item.title}>
                            <div className="workflow-icon">{item.icon}</div>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="stat-strip">
                    {heroStats.map((stat) => (
                        <div className="hero-stat" key={stat.label}>
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Information;

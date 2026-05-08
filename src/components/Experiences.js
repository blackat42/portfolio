import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import "../styles/Experiences.css";

import comp1logo from "../images/hiptech.svg";
import corsairLogo from "../images/corsair_logo.png";

const experiences = [
    {
        company: "Corsair",
        role: "AI/ML Engineer",
        period: "January 2024 - Present",
        logo: corsairLogo,
        alt: "Corsair Logo",
        tags: ["LangChain", "RAG", "Agents", "ChromaDB"],
        bullets: [
            "Developed and deployed a domain-specific AI chatbot using LangChain, Chroma, and HuggingFace embeddings to answer queries from technical PDFs and README files.",
            "Engineered a Retrieval-Augmented Generation pipeline with markdown ingestion, recursive text chunking, and similarity-based vector retrieval.",
            "Designed tool-using LangChain agents capable of dynamic reasoning and tool selection for multi-step question answering.",
            "Built multi-tool agent flows with document lookup, JSON parsing, and API interaction to support enriched responses.",
            "Implemented streaming agent responses with callback handlers to improve interactivity and reduce response latency.",
            "Built evaluation benchmarks and used relevance scoring to improve chatbot response accuracy and retrieval quality.",
        ],
    },
    {
        company: "HIPTECH Solution",
        role: "Software Engineer",
        period: "March 2024 - Present",
        logo: comp1logo,
        alt: "HIPTECH Solution Logo",
        tags: ["Qt", "C++", "Jira", "GitLab"],
        bullets: [
            "Developed and maintained software for managing devices, adjusting lighting, and controlling functions using the Qt Framework.",
            "Worked with the team to design and implement new features across the product lifecycle.",
            "Used JIRA for task tracking and GitLab for version control in collaborative delivery.",
        ],
    },
    {
        company: "Vietnam Blockchain Corporation",
        role: "Intern - Web Developer",
        period: "June 2023 - March 2024",
        icon: <ApartmentIcon sx={{ fontSize: 34 }} />,
        tags: ["Node.js", "REST API", "Backend", "Teamwork"],
        bullets: [
            "Developed backend services with Node.js, strengthening backend engineering and problem-solving skills.",
            "Collaborated with a partner to develop a RESTful API for a collecting opinion application.",
            "Maintained and optimized backend systems for reliability and performance.",
        ],
    },
];

export default function Experiences() {
    return (
        <section className="section-shell experiences-section">
            <div className="section-heading align-left">
                <span className="section-kicker">Production work</span>
                <h2>Experience</h2>
                <p>
                    Practical engineering across AI assistants, retrieval
                    systems, desktop software, backend APIs, and team delivery.
                </p>
            </div>

            <div className="experience-list">
                {experiences.map((experience, index) => (
                    <article className="experience-card" key={experience.company}>
                        <div className="experience-index">
                            {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="experience-logo">
                            {experience.logo ? (
                                <img src={experience.logo} alt={experience.alt} />
                            ) : (
                                experience.icon
                            )}
                        </div>
                        <div className="experience-body">
                            <div className="experience-topline">
                                <span>{experience.period}</span>
                                <div className="tag-row">
                                    {experience.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <h3>{experience.company}</h3>
                            <p className="experience-role">{experience.role}</p>
                            <ul>
                                {experience.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

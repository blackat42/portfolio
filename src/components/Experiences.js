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
        tags: ["RAG", "Agents", "AWS Bedrock", "Django", "FastAPI", "React", "Docker"],
        bullets: [
            "Built a domain-specific RAG chatbot (LangChain, Chroma, HuggingFace embeddings) that answers questions from technical PDFs and docs, with streaming responses and evaluation benchmarks for retrieval quality.",
            "Designed tool-using agents that pick the right tool per step (document lookup, JSON parsing, API calls) for multi-step question answering.",
            "Navigator: an in-store AI shopping assistant for retail kiosks. An agent on AWS Bedrock asks clarifying questions like a salesperson and recommends products from live catalog, inventory, and knowledge-base data via hybrid and vector search.",
            "Corsair Pulse: an internal intelligence platform (Django + React) that brings sales, e-commerce, influencer, and event data together, with a chat interface for asking business questions and automated digest emails.",
            "Keystone: a brand asset and product launch platform with a Creative Studio for generating on-brand marketing assets from templates, plus approval and publishing workflows.",
            "Corsair Translator: an AI translation service that uses translation memory and glossary rules to keep product terminology consistent across languages, translates SKU sheets, and exposes a secure API to other teams.",
            "NPI Forecast Hub: a new-product forecasting tool where Product Managers build cases, the system calculates scenarios, and Finance reviews and approves a locked baseline (FastAPI + React/TypeScript).",
            "Packaging Extractor and other internal tools: browser-based analysis of packaging artwork, marketplace listing automation, and AI proofs of concept hosted on a shared platform for other departments.",
            "Shipped and maintained these apps end to end with Docker, Celery, PostgreSQL, CI pipelines, and AWS deployments.",
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

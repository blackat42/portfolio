import React from "react";
import "../styles/TechStack.css";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaPhp,
    FaAws,
    FaBrain,
} from "react-icons/fa";
import {
    SiCplusplus,
    SiJavascript,
    SiRust,
    SiNextdotjs,
    SiExpress,
    SiDjango,
    SiFlask,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiSqlite,
    SiFirebase,
    SiRedis,
    SiJira,
    SiGit,
    SiGitlab,
    SiGnubash,
    SiDocker,
    SiQt,
    SiLangchain,
} from "react-icons/si";
import { TbVectorBezier2 } from "react-icons/tb";

const categories = [
    {
        title: "Languages",
        summary: "Core programming tools for AI services, automation, and product logic.",
        techs: [
            { name: "C++", icon: <SiCplusplus /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Rust", icon: <SiRust /> },
            { name: "PHP", icon: <FaPhp /> },
        ],
    },
    {
        title: "Frameworks",
        summary: "Application layers for turning AI ideas into usable product experiences.",
        techs: [
            { name: "Qt", icon: <SiQt /> },
            { name: "React", icon: <FaReact /> },
            { name: "Next", icon: <SiNextdotjs /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express", icon: <SiExpress /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "Flask", icon: <SiFlask /> },
        ],
    },
    {
        title: "AI Solutions & Cloud",
        summary: "Retrieval, embeddings, LLM orchestration, and model access for AI solutions.",
        techs: [
            { name: "LangChain", icon: <SiLangchain /> },
            { name: "AWS Bedrock", icon: <FaAws /> },
            { name: "HuggingFace", icon: <FaBrain /> },
            { name: "ChromaDB", icon: <TbVectorBezier2 /> },
        ],
    },
    {
        title: "Data Stores",
        summary: "Persistence layers for domain data, retrieved context, and product state.",
        techs: [
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "SQLite", icon: <SiSqlite /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "Redis", icon: <SiRedis /> },
        ],
    },
    {
        title: "Delivery Tools",
        summary: "Version control, containers, scripting, and team execution.",
        techs: [
            { name: "Jira", icon: <SiJira /> },
            { name: "Git", icon: <SiGit /> },
            { name: "GitLab", icon: <SiGitlab /> },
            { name: "Bash", icon: <SiGnubash /> },
            { name: "Docker", icon: <SiDocker /> },
        ],
    },
];

export default function TechStack() {
    return (
        <section className="section-shell tech-section">
            <div className="section-heading">
                <span className="section-kicker">Technical operating system</span>
                <h2>Technology</h2>
                <p>
                    A practical toolkit for developing AI solutions across
                    domains: domain data, retrieval, orchestration, full-stack
                    interfaces, and disciplined delivery workflows.
                </p>
            </div>
            <div className="techStack">
                {categories.map((category) => (
                    <div className="category" key={category.title}>
                        <div className="categoryTitle">
                            <span>{category.title}</span>
                            <p>{category.summary}</p>
                        </div>
                        <div className="techs">
                            {category.techs.map((tech) => (
                                <div className="tech" key={tech.name}>
                                    {tech.icon}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

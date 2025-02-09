import React from "react";
import "../styles/TechStack.css";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaJava,
    FaPhp,
    FaDatabase,
    FaTools,
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
} from "react-icons/si";

const categories = [
    {
        title: "Languages",
        techs: [
            { name: "C++", icon: <SiCplusplus /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Rust", icon: <SiRust /> },
            { name: "PHP", icon: <FaPhp /> },
        ],
    },
    {
        title: "Framework",
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
        title: "Database",
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
        title: "Tools",
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
        <div className="container">
            <div className="title">Technology</div>
            <div className="techStack">
                {categories.map((category) => (
                    <div className="category" key={category.title}>
                        <div className="categoryTitle">{category.title}</div>
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
        </div>
    );
}

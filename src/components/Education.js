import React from "react";
import "../styles/Education.css";
import schoolLogo from "../images/hcmut.png";

const educationItems = [
    {
        period: "Oct 2023 - Present",
        school: "Ho Chi Minh University of Technology",
        degree: "Master Degree in Computer Science",
        details: ["Current GPA: 3.8/4.0"],
    },
    {
        period: "Oct 2020 - Sep 2024",
        school: "Ho Chi Minh University of Technology",
        degree: "Bachelor Degree in Computer Science - Software Engineer",
        details: ["Accumulative GPA: 3.2/4.0"],
    },
];

export default function Education() {
    return (
        <section className="section-shell education-section">
            <div className="section-heading">
                <span className="section-kicker">Academic foundation</span>
                <h2>Education</h2>
                <p>
                    Computer science training with a strong software engineering
                    base and ongoing graduate work focused on intelligent
                    systems.
                </p>
            </div>

            <div className="education-timeline">
                {educationItems.map((item) => (
                    <article className="education-card" key={item.degree}>
                        <div className="timeline-node">
                            <img src={schoolLogo} alt="" />
                        </div>
                        <div className="education-meta">{item.period}</div>
                        <div className="education-content">
                            <h3>{item.school}</h3>
                            <p className="degree">{item.degree}</p>
                            <ul>
                                {item.details.map((detail) => (
                                    <li key={detail}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

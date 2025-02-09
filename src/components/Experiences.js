import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import "../styles/Experiences.css";

import comp1logo from "../images/hiptech.svg";

export default function LeftAlignedTimeline() {
    return (
        <div className="container experiences">
            <div className="educationText">Experience</div>
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                    },
                }}
            >
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ marginTop: "10px" }}
                        color="textSecondary"
                    >
                        March 2024 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#ffffff" }}>
                            <img
                                src={comp1logo}
                                width={50}
                                height={50}
                                sizes=""
                                alt="HIPTECH Solution Logo"
                            />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="experienceContainer">
                            <div className="schoolName">HIPTECH Solution</div>
                            <div className="role">Software Engineer</div>
                            <div className="description">
                                <ul>
                                    <li>
                                        Developed and maintained software for
                                        managing devices, adjusting lighting,
                                        and controlling functions using the Qt
                                        Framework (C++).
                                    </li>
                                    <li>
                                        Work with the team to design and
                                        implement new features.
                                    </li>
                                    <li>
                                        Participate in the full software
                                        development lifecycle.
                                    </li>
                                    <li>
                                        Proficient in using project management
                                        and version control tools, including
                                        JIRA for task tracking, GitLab for
                                        version control
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem sx={{ marginTop: "20px" }}>
                    <TimelineOppositeContent
                        sx={{ marginTop: "25px" }}
                        color="textSecondary"
                    >
                        June 2023 – March 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#ffffff" }}>
                            <ApartmentIcon
                                color="action"
                                sx={{ fontSize: 50 }}
                            />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="experienceContainer">
                            <div className="schoolName">
                                Vietnam Blockchain Corporation
                            </div>
                            <div className="role">Intern - Web Developer</div>
                            <div className="description">
                                <ul>
                                    <li>
                                        Developed a new backend for a project
                                        using Node.js, demonstrating proficiency
                                        in backend development and
                                        problem-solving.
                                    </li>
                                    <li>
                                        Collaborated closely with a partner to
                                        develop a Restful API for a collecting
                                        opinion application, enhancing skills in
                                        backend development and teamwork.
                                    </li>
                                    <li>
                                        Gained valuable experience working
                                        within a team environment, contributing
                                        to project discussions and problem
                                        solving sessions.
                                    </li>
                                    <li>
                                        Maintained and optimized backend systems
                                        for a Node.js application, ensuring its
                                        reliability and performance.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}

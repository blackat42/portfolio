import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import "../styles/Education.css";
import schoolLogo from "../images/hcmut.png";

export default function LeftAlignedTimeline() {
    return (
        <div className="container">
            <div className="educationText">Education</div>
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
                        Oct 2020 - Sep 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#ffffff" }}>
                            <img
                                src={schoolLogo}
                                width={50}
                                height={50}
                                sizes=""
                                alt="schoolLogo"
                            />
                        </TimelineDot>{" "}
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="experienceContainer">
                            <div className="schoolName">
                                Ho Chi Minh University of Technology
                            </div>
                            <div className="degree">
                                Master Degree in Computer Science
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem sx={{ marginTop: "20px" }}>
                    <TimelineOppositeContent
                        sx={{ marginTop: "25px" }}
                        color="textSecondary"
                    >
                        Sep 2022 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: "#ffffff" }}>
                            <img
                                src={schoolLogo}
                                width={50}
                                height={50}
                                sizes=""
                                alt="schoolLogo"
                            />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="experienceContainer">
                            <div className="schoolName">
                                Ho Chi Minh University of Technology
                            </div>
                            <div className="degree">
                                Bachelor Degree in Computer Science - Software
                                Engineer
                            </div>
                            <div className="role">
                                <ul>
                                    <li>Accumulative GPA: 3.2/4.0</li>
                                </ul>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}

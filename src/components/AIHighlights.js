import React from "react";
import "../styles/AIHighlights.css";
import {
    FaBrain,
    FaChartLine,
    FaCode,
    FaDatabase,
    FaRobot,
    FaSearch,
} from "react-icons/fa";

const aiSystems = [
    {
        icon: <FaSearch />,
        title: "Domain Knowledge Assistants",
        text: "Build assistants that understand documents, policies, product data, and internal knowledge for different industries.",
    },
    {
        icon: <FaRobot />,
        title: "Workflow Automation Agents",
        text: "Design agents that can inspect context, choose tools, parse data, call APIs, and reduce repeated manual work.",
    },
    {
        icon: <FaChartLine />,
        title: "Decision Support Systems",
        text: "Connect AI reasoning with structured data, retrieval, and evaluation so teams can make better decisions faster.",
    },
    {
        icon: <FaCode />,
        title: "AI Product Integration",
        text: "Bring AI into real products with React, Node.js, Python, streaming responses, and user-friendly workflows.",
    },
];

const deliverySteps = [
    "Understand domain",
    "Map knowledge",
    "Design workflow",
    "Build retrieval",
    "Add reasoning",
    "Integrate product",
    "Evaluate",
];

const focusTags = [
    "Cross-domain AI",
    "Business copilots",
    "Workflow automation",
    "Decision support",
    "LangChain",
    "RAG architecture",
    "Vector search",
    "ChromaDB",
    "HuggingFace embeddings",
    "AWS Bedrock",
    "Prompt engineering",
    "Streaming callbacks",
    "Tool calling",
    "Similarity search",
];

export default function AIHighlights() {
    return (
        <section className="section-shell ai-section">
            <div className="section-heading">
                <span className="section-kicker">Career direction</span>
                <h2>AI Solutions Across Domains</h2>
                <p>
                    I want to develop AI solutions that can be adapted to many
                    fields: business operations, product support, education,
                    research, analytics, knowledge management, and internal
                    automation.
                </p>
            </div>

            <div className="ai-content">
                <div className="ai-system-grid">
                    {aiSystems.map((system) => (
                        <article className="ai-system-card" key={system.title}>
                            <div className="ai-card-icon">{system.icon}</div>
                            <h3>{system.title}</h3>
                            <p>{system.text}</p>
                        </article>
                    ))}
                </div>

                <div className="ai-side-panel">
                    <div className="ai-panel-top">
                        <div>
                            <span>AI solution map</span>
                            <h3>From domain problem to working AI product</h3>
                        </div>
                        <FaBrain />
                    </div>

                    <div className="ai-pipeline">
                        {deliverySteps.map((step, index) => (
                            <div className="pipeline-step" key={step}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <strong>{step}</strong>
                            </div>
                        ))}
                    </div>

                    <div className="ai-focus">
                        <div className="ai-focus-title">
                            <FaDatabase />
                            Current focus
                        </div>
                        <div className="ai-tags">
                            {focusTags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

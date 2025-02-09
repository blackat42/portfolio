import React, { useEffect, useState } from "react";
import imageSource from "../images/myportfolio.jpg";
import "../styles/Information.css";
import information from "../data/information.json";

const Information = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(information);
    }, []);

    return (
        <div className="container" style={{ marginTop: "50px" }}>
            <div className="left-column">
                <div className="name">{data.name}</div>
                <div className="text">{data.description}</div>
                <div className="quotes">{data.quotes}</div>
                <div className="bio1">{data.bio1}</div>
                <div className="bio2">{data.bio2}</div>
                <div className="bio3">{data.bio3}</div>
            </div>
            <div className="image-container">
                <img
                    src={imageSource}
                    alt="Profile"
                    className="image"
                    style={{ transform: "rotate(5deg)" }}
                />
                <div className="orbit orbit1">
                    <div className="orbit-object orbit-object1"></div>
                </div>
                <div className="orbit orbit2">
                    <div className="orbit-object orbit-object2"></div>
                </div>
            </div>
        </div>
    );
};

export default Information;

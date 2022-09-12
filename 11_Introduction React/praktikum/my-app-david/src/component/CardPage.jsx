import React from "react";
import logo from "../logo.svg";
import "../Home.css";
import Card from "./Card";

function CardPage() {
    return(
        <div className="container d-flex flex-column justify-content-start align-items-center pt-5">
            <h1 className="display-2">Portofolio</h1>
            <div className="container d-flex flex-row justify-content-between align-items-center">
                <img src={logo} className="logo" alt="" />
                <img src={logo} className="logo" alt="" />
                <img src={logo} className="logo" alt="" />
            </div>
            <h1 className="display-5">My Project</h1>
            <div className="d-flex flex-row justify-content-around align-items-center">
                <Card name="Project 1"/>
                <Card name="Project 2"/>
            </div>
        </div>
    )
}

export default CardPage;
import logo from "../logo.svg";
import React from "react";

function Card(props) {
    return(
        <div className="card m-3">
            <img src={logo} className="logo" alt="logo2" />
            <div className="card-body border-top">
                <p className="card-text">{props.name}</p>
            </div>
        </div>
    );
}

export default Card;
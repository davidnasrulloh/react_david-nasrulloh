import React from "react";
import "../css/main.css";
import fotoDavid from "../img/foto-nonformal-david.jpg";


function Main() {
    return(
        <div className="container d-flex flex-column">
            <div className="header d-flex justify-content-start align-items-center">
                <div className="foto">
                    <img id="foto-profil" alt="foto" src={fotoDavid} />
                </div>
                <div className="main-p">
                    <p className="sapaan">Haiiii, my name is </p>
                    <p className="nama">David Nasrulloh</p>
                    <p className="hobi">I build things for the web</p>
                    <p className="tombol"><a href="about.html">Get In Touch</a></p>
                </div>
            </div>
        </div>
    );
}

export default Main;
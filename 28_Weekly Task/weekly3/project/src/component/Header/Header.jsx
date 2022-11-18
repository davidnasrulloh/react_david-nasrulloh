import React from "react";
import david from "../../asset/img/david.png";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>
            <Navbar />
            <div className="container d-flex flex-row justify-content-start align-items-center marginTop" id="header">
                <div className="m-5">
                    <img src={david} width="400" className="rounded-circle shadow-lg" alt="" />
                </div>
                <div>
                    <div class="container py-5 mx-5">
                        <h1 class="display-5 fw-bold">
                            David <span className="fw-normal">Nasrulloh</span>
                        </h1>
                        <p class="col-md-8 fs-4">Project ini dibuat untuk memenuhi <span className="fw-bold text-success">Tugas Weekly</span></p>
                        <a class="btn btn-primary btn-lg" target="_blank" rel="noreferrer" href={`https://www.linkedin.com/in/davidnasrulloh/`} type="button">
                            <FontAwesomeIcon icon={faLinkedinIn} className="me-3" />
                            David Nasrulloh
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

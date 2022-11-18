import React from "react";
import david from "../../asset/img/david.png"
import "./Header.css"
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return(
        <>
            <Navbar/>
            <div className="container d-flex flex-row justify-content-start align-items-center mt-5 pt-5 marginTop">
                <div className="m-5">
                    <img src={david} width="400" className="rounded-circle shadow-lg" alt="" />
                </div>
                <div>
                    <div class="container py-5 mx-5">
                        <h1 class="display-5 fw-bold">David <span className="fw-normal">Nasrulloh</span></h1>
                        <p class="col-md-8 fs-4">Project ini dibuat untuk memenuhi tugas Weekly 1</p>
                        <a class="btn btn-primary btn-lg" target="_blank" rel="noreferrer" href={`https://www.linkedin.com/in/davidnasrulloh/`} type="button">Goto Linkedin</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
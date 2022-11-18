import React from "react";
import locataionMaker from "../../asset/img/logo.png"

const Navbar = () => {
    return(
        <div className="fixed-top bg-white" style={{ zIndex:1000 }} >
            <nav className="navbar navbar-expand-lg pb-3 pt-3 shadow-sm">
                <div className="container d-flex">
                    <a className="navbar-brand" href="#">
                        <img src={locataionMaker} width="80" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link fw-semibold fs-6 mx-3" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold fs-6 mx-3" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold fs-6 mx-3" href="#">Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold fs-6 mx-3" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
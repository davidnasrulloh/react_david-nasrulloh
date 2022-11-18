import React from "react";
import locataionMaker from "../../asset/img/logo.png";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className="fixed-top bg-white" style={{ zIndex: 1000 }} >
            <nav className="navbar navbar-expand-lg pb-3 pt-3 shadow-sm">
                <div className="container d-flex">
                    <Link className="navbar-brand" href="/">
                        <img src={locataionMaker} width="80" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold fs-6 mx-3" aria-current="page" to="/#header">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold fs-6 mx-3" to="/#about-us">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold fs-6 mx-3" to="/#member">
                                    Member
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold fs-6 mx-3" to="/#contact" smooth={true} offset={50} duration={500} delay={2000}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
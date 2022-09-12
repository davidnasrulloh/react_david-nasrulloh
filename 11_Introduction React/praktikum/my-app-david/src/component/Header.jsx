import React from "react";
import "../css/main.css";
import logoAlta2 from '../img/logo-ALTA@2x.png';

function Header() {
    return(
        <div className="container pt-3">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="alterra">
                        <a href="index.html"><img className="logo-atas" alt="logoalta" src={logoAlta2} /></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="row align-items-center navig">
                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html" className="aktif">HOME</a></div>
                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html">ABOUT</a></div>
                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">EXPERIENCE</a></div>
                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
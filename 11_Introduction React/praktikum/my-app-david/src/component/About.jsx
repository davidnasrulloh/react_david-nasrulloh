import React from "react";
import "../css/main.css";
import fotoDavid from "../img/foto-nonformal-david.jpg";
import logoAltaBawah from "../img/logo-ALTA-v2.png";

function About() {
    return(
        <div className="pt-5">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12 pl-5">
                        <div className="about-anne">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit, corporis aliquid nam aperiam voluptate quam, iste explicabo vel facilis exercitationem possimus, natus eius alias deleniti maiores aliquam. Nam, nihil.</p>
                        </div>
                        <div>
                            <table class="tabel-anne">
                                <tr>
                                    <td>HTML & CSS</td>
                                    <td>Serverless</td>
                                    <td>Scrum</td>
                                </tr>
                                <tr>
                                    <td>Programming</td>
                                    <td>Restful API</td>
                                    <td>Test-Driven Dev</td>
                                </tr>
                                <tr>
                                    <td>Database</td>
                                    <td>Javascript</td>
                                    <td>Software Testing</td>
                                </tr>
                                <tr>
                                    <td>Git & Github</td>
                                    <td>Sigle Page App</td>
                                    <td>UX/UI Designer</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 col-sm-12 col-12 pr-5">
                        <div className="foto-id text-lg-right text-md-center text-sm-center">
                            <img src={fotoDavid} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
                        <a href="index.html"><img class="logo-bawah" src={logoAltaBawah} /></a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
                            <h6>Social Media:</h6>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
                            <h6 className="text-lg-right text-md-center text-sm-center kopi">Copyleft © 2019 - Unjelas Team</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default About;

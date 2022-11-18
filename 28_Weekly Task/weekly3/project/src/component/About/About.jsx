import React, { useEffect, useState } from "react";
import "./About.css";
import { experiences } from "../../dataExperience";
import { educations } from "../../dataEducation";

// Gambar
import css from "../../asset/img/css.svg";
import html from "../../asset/img/html5.svg";
import reactjs from "../../asset/img/reactjs.svg";
import tailwinds from "../../asset/img/tailwind.svg";
import bootstrap5 from "../../asset/img/bootstrap5.svg";
import js from "../../asset/img/js.svg";
import collaboration from "./img/collaboration.png";
import communication from "./img/communication.png";
import leadership from "./img/leadership.png";
import publicSpeaking from "./img/public-speaking.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


const About = () => {

    const [experience, setExperience] = useState(experiences);
    const [education, setEducation] = useState(educations);

    useEffect(()=>{
        setExperience(experiences);
        setEducation(education);
    },[experiences, education])

    return(
        <>
            <div className="container" id="about-us">
                <div className="text-center">
                    <h4 className="text-primary"><span className="fw-bold">About</span> Me</h4>
                    <h2 className="text-primary fw-bold">Some simple things <span className="text-success">about me</span></h2>
                </div>
                <div className="d-flex flex-row align-content-center mt-5">
                    <div className="w-50 pe-5">
                        <div>
                            <h4 className="text-primary fw-bold">Language <span className="fw-normal">and</span> Tools</h4>
                            <div className="icon-logo">
                                <img src={js} alt="js" width={150} />
                                <img src={html} alt="js" width={150} />
                                <img src={css} alt="js" width={150} />
                                <img src={reactjs} alt="js" width={150} />
                                <img src={tailwinds} alt="js" width={150} />
                                <img src={bootstrap5} alt="js" width={150} />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-primary fw-bold mb-4">Educations</h4>
                            {
                                education.map((ed)=>{
                                    return(
                                        <div className="d-flex flex-row mb-3">
                                            <div className="w-25 text-end">
                                                <h6 className="fw-normal">{ed.city} <br/> {ed.time}</h6>
                                            </div>
                                            <div className="w-75 ps-4">
                                                <h5 className="fw-bold">{ed.location}</h5>
                                                <h6 className="fw-normal">{ed.description}</h6>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="line">

                    </div>
                    <div className="w-50 ps-5">
                        <h4 className="text-primary fw-bold">Soft Skill</h4>
                        <div className="d-flex flex-row mt-4">
                            <div className="text-center me-3">
                                <img src={communication} width="120" alt="" />
                                <h6>Communication</h6>
                            </div>
                            <div className="text-center mx-3">
                                <img src={collaboration} width="120" alt="" />
                                <h6>Collaboration</h6>
                            </div>
                            <div className="text-center mx-3">
                                <img src={publicSpeaking} width="120" alt="" />
                                <h6>Public Speaking</h6>
                            </div>
                            <div className="text-center mx-3">
                                <img src={leadership} width="120" alt="" />
                                <h6>Leadership</h6>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <h4 className="text-primary fw-bold mt-5"><span className="fw-normal">Recent</span> Experience</h4>
                            <div className="d-flex flex-fill mt-4">
                                <div className="d-flex flex-wrap h-50 flex-fill">
                                    {
                                        experience.map((ex)=>{
                                            return(
                                                <div className="mb-4 w-50 pe-2">
                                                    <h5 className="fw-normal"><span className="fw-bold">{ex.location}</span>, {ex.position}, Sept’22 - Nov’22</h5>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h4 className="text-primary fw-bold mb-4">For More Information</h4>
                    <a className="btn btn-outline-primary btn-lg border border-primary border-3" href={`https://drive.google.com/file/d/1FG3gXLvqOyeWbCEAZHH1PV5srJp8mlyQ/view?usp=sharing`} target="_blank" rel="noreferrer" download> <FontAwesomeIcon icon={faDownload} className="me-2" /> Download Resume</a>
                </div>
            </div>
        </>
    )
}

export default About;
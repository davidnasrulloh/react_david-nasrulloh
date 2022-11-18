import React from "react";
import locationMarker from '../../asset/icons/locationMarker.svg';
import phone from '../../asset/icons/phone.svg';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {

    return (
        <div className="container py-5 mt-5">
            <div className="d-flex flex-row pb-5 align-items-center">
                <div className="d-flex flex-column w-50">
                    <div className="py-4">
                        <img src={require('../../asset/img/logo.png')} height="100" alt="" />
                    </div>
                    <div>
                        <h1 className="text-primary"><span className="fw-bold">David</span> Nasrulloh</h1>
                        <p className="pt-3 align-content-center"><img src={phone} width="20" className="" alt="" /><span className="m-3">081554465073</span></p>
                        <p className="align-content-center"><img src={locationMarker} width="20" className="" alt="" /><span className="m-3">Jl. Jombang</span></p>
                    </div>
                </div>
                <div className="d-flex flex-row w-50">
                    <div className="mx-5">
                        <ul className="list-unstyled">
                            <li className="fs-4 fw-bold py-2"><a href={'p'} className="text-decoration-none text-dark">Main Menu</a></li>
                            <li className="fs-5 py-1"><Link to='/#header' className="text-decoration-none text-dark">Home</Link></li>
                            <li className="fs-5 py-1"><Link to='/#about-us' className="text-decoration-none text-dark">About Us</Link></li>
                            <li className="fs-5 py-1"><Link to='/#member' className="text-decoration-none text-dark">Member</Link></li>
                            <li className="fs-5 py-1"><Link to='/#contact' className="text-decoration-none text-dark">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="mx-5">
                        <ul className="list-unstyled">
                            <li className="fs-4 fw-bold py-2"><a href={`p`} className="text-decoration-none text-dark">Social Media</a></li>
                            <li className="fs-5 py-1"><a href={`https://www.linkedin.com/in/davidnasrulloh/`} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">Linkedin</a></li>
                            <li className="fs-5 py-1"><a href={`https://www.instagram.com/davidnasrulloh_/`} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">Instagram</a></li>
                            <li className="fs-5 py-1"><a href={`https://dribbble.com/davidnasrulloh/`} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">Dribbble</a></li>
                            <li className="fs-5 py-1"><a href={`https://www.behance.net/davidnasrulloh`} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">Behance</a></li>
                        </ul>
                    </div>
                    <div className="ms-5">
                        <ul className="list-unstyled">
                            <li className="fs-4 fw-bold py-2"><a href={`p`} className="text-decoration-none text-dark">Support</a></li>
                            <li className="fs-5 py-1"><a href={`https://www.instagram.com/kantincoding/`} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">Kantin Coding</a></li>
                            <li className="fs-5 py-1"><a href={`https://www.instagram.com/davektor.id/`} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">Davektor</a></li>
                            <li className="fs-5 py-1"><a href={`https://dribbble.com/vidmondez/`} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">Vidmondez</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex fs-5 justify-content-center mt-2">
                David Nasrulloh ❤️ | 2022
            </div>
        </div>
    )
}

export default Footer;
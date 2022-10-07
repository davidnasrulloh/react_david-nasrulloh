import "../assets/css/Sidebar.css";
import { React } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return(
        <>
            <div className="btn-wrapper">
                <button className="btn-sidebar btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header headerCanvas">
                <h5 className="offcanvas-title text-dark" id="offcanvasScrollingLabel">Menu David Nasrulloh</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body barCanvas">
                <div className="list-group">
                    <div type="text" className="list-group-item list-group-item-action active" aria-current="true">
                        Pilih menu dibawah yaaaaa 
                    </div>
                    <Link to="/">
                        <button type="button" className="list-group-item list-group-item-action">Home</button>  
                    </Link>
                    <Link to="/about/about-app">
                        <button type="button" className="list-group-item list-group-item-action">About App</button>
                    </Link>
                    <Link to="/about/about-author">
                        <button type="button" className="list-group-item list-group-item-action">About Author</button>
                    </Link>
                </div>
            </div>
            </div>
        </>
    );
}
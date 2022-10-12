import React from "react";
import { Link } from "react-router-dom";
import {Stack} from "react-bootstrap";

const Home = () => {
    return(
        <Stack className="p-5">
            <Stack gap={3} className="d-flex flex-column align-items-center justify-content-start">
                <Link className="me-5" to="/form-coding"> 
                    <button className="btn btn-primary">Form Coding</button>
                </Link>
                <Link className="me-5" to="/search"> 
                    <button className="btn btn-primary">Search Page</button>
                </Link>
            </Stack>
        </Stack>
    );
}

export default Home;
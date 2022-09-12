import React from "react";
import "./Home.css";
import CardPage from "./component/CardPage";
import Header from "./component/Header";
import Main from "./component/Main";
import About from "./component/About";
import Form from "./component/Form";
import "./css/main.css";

function Home() {
    return(
        <div className="home-background">
            <Header/>
            <Main/>
            <CardPage/>
            <Form/>
            <About/>
        </div>
    )
}

export default Home;
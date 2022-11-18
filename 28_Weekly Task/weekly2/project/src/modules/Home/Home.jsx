import React from "react";
import About from "../../component/About/About";
import Contact from "../../component/Contact/Contact";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";

const Home = () => {
    return(
        <>
            <Header/>
            <About/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home;
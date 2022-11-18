import React from "react";
import About from "../../component/About/About";
import Contact from "../../component/Contact/Contact";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Member from "../../component/Member/Member";

const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Member />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;



import React, { useEffect } from "react";
import { Navbar, Footer } from "components/index";
import TeamContent from "./TeamContent";
import { animateScroll as scroll } from 'react-scroll';

const TeamPage = () => {

    useEffect(() => {
        scroll.scrollToTop();
    }, [])

    return (
        <>
            <Navbar />
            <TeamContent />
            <Footer />
        </>
    )
}

export default TeamPage;
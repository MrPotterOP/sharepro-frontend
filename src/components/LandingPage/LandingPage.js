import React from "react";

//components
import Navbar from "../Navbar";
import Hero from "../Hero";
import WorkSection from "../WorkSection";
import FAQs from "../FAQs";
import Footer from "../Footer";

const LandingPage = ()=>{
    return(
        <section className="landing-page">
            <Navbar />
            <Hero />
            <WorkSection />
            <FAQs />
            <Footer />
        </section>
    )
};

export default LandingPage;
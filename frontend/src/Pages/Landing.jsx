import React from "react";
import Navbar from "../Components/Navbar";
import Description from "../Components/Description"
import Feature from "../Components/Feature"
import Team from "../Components/Team";
import Footer from "../Components/Footer";

function Landing(){
    return (
        <div className="w-screen  bg-zinc-900">
        <Navbar />
        <Description />
        <Feature />
        <Team />
        <Footer />
        </div>

        
        
    )
}

export default Landing;
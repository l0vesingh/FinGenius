import React from "react";
import Navbar from "../Components/Navbar";
import StocksDisplay from "../Components/StocksDisplay";

function StocksPage(){
    return (
        <div className="w-screen bg-zinc-900">
         <Navbar />
         <StocksDisplay />
        </div>
        
    )
}

export default StocksPage;
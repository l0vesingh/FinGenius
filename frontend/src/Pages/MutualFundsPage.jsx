import React from "react";
import Navbar from "../Components/Navbar";
import MutualfundDisplay from "../Components/MutualfundDisplay";

function MutualFundsPage(){
    return(
        <div className="w-screen bg-zinc-900">
            <Navbar />
            <MutualfundDisplay />
        </div>
    )
}

export default MutualFundsPage;
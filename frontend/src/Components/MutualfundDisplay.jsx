import React from "react";
import Footer from "./Footer";
import MutualShow from "./MutualShow";

function MutualfunDisplay(){
    return (
        <>
        <div className="w-screen h-auto bg-zinc-900">
          <hr className="text-zinc-600"/>
          <MutualShow />
        </div>
        <hr className="text-zinc-800"/>
        <Footer />
        </>
    )
}

export default MutualfunDisplay;
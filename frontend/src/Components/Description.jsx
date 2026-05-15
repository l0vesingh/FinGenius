import React from "react";
import Hero from "./Hero"
import Proto from "./Proto" 

function Description(){
    return(
    <div className="w-full bg-zinc-900">
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14">
        <Hero />
        <Proto />
      </div>
    </div>
    )
}

export default Description;
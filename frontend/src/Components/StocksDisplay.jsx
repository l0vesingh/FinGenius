import React from "react";
import Bar from "./Bar";
import StockShow from "./StockShow";
import Footer from "./Footer";


function StocksDisplay(){
    return(
        <>
        <div className="w-screen h-auto bg-zinc-900">
            <hr className="text-zinc-600"/>
            <Bar />
            <hr className="text-zinc-600"/>
            <StockShow />
            <hr className="text-zinc-800"/>
        <Footer />
        </div>
        </>

    )
}

export default StocksDisplay;
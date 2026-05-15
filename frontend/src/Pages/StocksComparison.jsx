import React from "react";
import Navbar from "../Components/Navbar"
import StockCompare from "../Components/StockCompare";

function StockComparison(){
  return (
    <div className="w-screen h-[150vh] bg-zinc-900">
      <Navbar />
      <StockCompare />
    </div>
  )
}

export default StockComparison;

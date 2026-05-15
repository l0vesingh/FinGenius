import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Airecom from "../Components/Airecom";
import Footer from "../Components/Footer";

function RecommendationPage() {
  return (
    <>
      <div className="w-screen h-auto bg-zinc-900">
        <Navbar />
        <div className="p-10">
          <Airecom />
        </div>
      </div>
      <div className="w-screen  bg-zinc-900">
        <hr className="text-zinc-900" />
      <Footer />
      </div>
    </>
  );
}

export default RecommendationPage;

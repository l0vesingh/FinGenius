import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();
  const handleSignupclick = () => {
    navigate("/signup");
  }

  const handleLoginClick = () => {
    navigate("/login");
  }
  return (
    <div className="flex flex-col lg:mt-10 mt-5 p-12 lg:p-25">
      <h1 className="lg:text-6xl text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-silver-400 bg-clip-text text-transparent">Track,Analyze,</h1>
      <h1 className="lg:text-5xl text-3xl text-white font-bold">Grow</h1>
      <p className="lg:text-xl text-lg mt-2 text-zinc-400">
        Harness the power of artificial intelligence to manage, grow, and optimize your investments — all from one intelligent platform.
      </p>
      <div className="buttons flex gap-5 mt-5">
        <button onClick={handleSignupclick} className="text-white flex mt-1 gap-2 font-semibold px-3 py-1 lg:px-5 lg:py-2 rounded-lg bg-gradient-to-r from-blue-800 to-purple-700 hover:opacity-60 transition">
          <span>Get Started</span>
          <span className="text-white text-xs lg:text-sm mt-1">
            <FaLongArrowAltRight />
          </span>
        </button>
        <button onClick={handleLoginClick} className="lg:text-sm text-xs rounded-lg bg-zinc-600 px-4 py-1 lg:px-5 lg:py-3 font-semibold text-white hover:bg-zinc-400">
          Login
        </button>
      </div>
    </div>
  );
}

export default Hero;

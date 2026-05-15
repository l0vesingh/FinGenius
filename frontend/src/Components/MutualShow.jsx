import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdCompare } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

function MutualShow() {
  const navigate = useNavigate();
  const handlecompare = () => {
    navigate("/mutual-funds/user/compare");
  };

  const handleai = () => {
    navigate("/user/fin/ai");
  };

  const popularFunds = [
    {
      name: "Motilal Oswal Midcap",
      return: "37.5",
      image: "/moti.png",
      year: "3Y",
    },
    {
      name: "Parag Parikh Flexicap ",
      return: "25.6",
      image: "/parag.png",
      year: "3Y",
    },
    {
      name: "Bandhan Smallcap",
      return: "38.0",
      image: "/bandhan.png",
      year: "3Y",
    },
    { name: "Indraprasth Gas", return: "28.9", image: "/hdfc.png", year: "3Y" },
  ];

  const collections = [
    { name: "High returns", image: "/Highreturn.png" },
    { name: "Gold Funds", image: "/Goldfunds.png" },
    { name: "5 star Funds", image: "/5star.png" },
    { name: "Large Cap", image: "/large.png" },
    { name: "Mid Cap", image: "/mid.png" },
    { name: "Small Cap", image: "/small.png" },
  ];

  return (
    <div className="w-screen flex justify-between p-9 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div className="w-full lg:w-[60vw]">
        {/* Most Traded on Fingenius */}
        <div className="flex justify-between">
          <h3 className="text-white font-bold text-lg">Popular Funds</h3>
          <Link className="text-emerald-500 text-sm font-semibold">
            see all
          </Link>
        </div>

        <div className="flex items-center justify-between mt-5">
          {popularFunds.map((m, i) => (
            <div
              key={i}
              className="w-45 h-45 bg-zinc-800  border-1 border-zinc-700 rounded-lg cursor-pointer hover:scale-[102%]"
            >
              <div className="flex flex-wrap p-5">
                <img src={m.image} alt="" className="w-10 h-10 rounded-md" />
                <p className="text-white  text-sm mt-2 font-semibold break-words">
                  {m.name}
                </p>
              </div>
              <div className="mt-6 p-2">
                <h4 className="text-white text-md font-semibold ml-3">
                  {m.return}{" "}
                  <span className="text-sm text-zinc-400">({m.year})</span>
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-15">
          <h3 className="text-white font-bold text-lg">Collections</h3>
          <Link className="text-emerald-500 text-sm font-semibold">
            see all
          </Link>
        </div>
        <div className="flex justify-between mt-5">
          {collections.map((c,i)=>(
           <>
           <div>
            <div className="flex items-center justify-center w-30 h-20 cursor-pointer bg-zinc-800 border-1 rounded-lg hover:scale-[102%] border-zinc-700">
                <img src={c.image} className="w-12 mix-blend-lighten" />
            </div>
            <p className="text-md text-white font-semibold mt-1 text-center">{c.name}</p>
            </div>
           </>
          ))}
        </div>
        <h3 className="text-lg text-white font-bold mt-15">Product & Tools</h3>
        <div className="flex gap-5 mt-5">
          <div
            onClick={handlecompare}
            className="flex flex-col w-40 h-25 bg-zinc-800 border-1 border-zinc-700 cursor-pointer rounded-lg hover:scale-[102%] text-white p-3"
          >
            <MdCompare className="text-2xl mb-2 mt-2" />
            <h4>Compare Funds</h4>
          </div>
          <div
            onClick={handleai}
            className="flex flex-col w-40 h-25 bg-zinc-800 border-1 border-zinc-700 cursor-pointer rounded-lg hover:scale-[102%] text-white p-3"
          >
            <SlBadge className="text-2xl mb-2 mt-2" />
            <h4>Ask AI</h4>
          </div>
        </div>
      </div>
      <div className="lg:w-[30vw]">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">Your Investments</h3>
          <Link className="text-emerald-500 font-semibold text-sm">
            Dashboard
          </Link>
        </div>
        <div className="w-full p-4 h-20 border-zinc-600 border-1 rounded-lg shadow-lg mt-5 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">₹0</h3>
            <p className="text-sm text-zinc-500 font-semibold">Total Returns</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white text-right">₹0</h3>
            <p className="text-sm text-zinc-500 font-semibold">Current Value</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-15">
          <h3 className="text-white font-semibold text-lg">All watchlists</h3>
          <Link className="text-emerald-500 font-semibold text-sm">
            View all
          </Link>
        </div>

        <div className="w-full flex items-center justify-between h-20 border-zinc-600 border-1 rounded-lg mt-5 p-4">
          <h3 className="text-white text-md font-semibold">
            Watchlist
          </h3>
          <IoMdArrowDropdown className="text-white text-lg" />
        </div>
      </div>
    </div>
  );
}

export default MutualShow;

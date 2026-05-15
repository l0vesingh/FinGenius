import React, { useState } from "react";
import { fetchRecommendations } from "../utils/aiapi";

function Airecom() {
  const [userId, setUserId] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const recs = await fetchRecommendations(userId);
      setRecommendations(recs);
    } catch (err) {
      alert("Failed to fetch recommendations.");
    }
    setLoading(false);
  };

  const handleGenerate = (e) =>{
   const {name,value} = e.target;
   if(name==="userId"){
    setUserId(value)
   }
  }
  return (
    <>
    <div className="flex items-center justify-center mt-10">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Your Portfolio, Supercharged by AI
      </h1>
    </div>
    <div className="flex items-center justify-center gap-5 mt-10">
        <p className="text-white text-xl font-bold">Enter your UserId:</p>
        <input type="text" onChange={handleGenerate} placeholder="Eg. user_500" name="userId" value={userId} className="text-center rounded-lg px-6 py-3 border-1 border-zinc-700 bg-zinc-800 text-white" />
        <button onClick={handleFetch} className="px-3 py-3 bg-green-500 text-white font-semibold text-sm rounded-lg">Get Recommendations</button>
    </div>
    <div className="flex items-center justify-between mt-10">
       {recommendations.map((r,i)=>(
        <div key={i} className="w-70 h-70 bg-zinc-800 border-1 border-zinc-700 rounded-md p-3">
             <h3 className="text-white font-semibold text-lg mt-4">
              {r.company_name} ({r.ticker})
            </h3>
            <p className="text-zinc-400">Sector: {r.sector}</p>
            <p className="text-white">${parseFloat(r.price).toFixed(2)}</p>
            <p className="text-sm text-green-300 mt-2">{r.explanation}</p>
        </div>
       ))}
    </div>
    </>
    
  );
}

export default Airecom;

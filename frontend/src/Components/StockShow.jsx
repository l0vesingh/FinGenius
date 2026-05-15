import React from "react";
import { Link,useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"
import { IoMdArrowDropdown } from "react-icons/io";
import { MdCompare } from "react-icons/md";
import { SlBadge } from "react-icons/sl";


function StockShow(){

    const user = useSelector((state)=> state.user)
    const navigate = useNavigate();
    const handlecompare = () =>{
      navigate("/stocks/user/compare")
    }

    const handleai = ()=>{
        navigate("/user/fin/ai")
    }

    const MostTraded = [
        {name:"Reliance Power", price:"₹66.98", return:"-0.07" ,increase:"0.10%",image:"/reliance.png",color:"red"} ,
        {name:"Tata Motors", price:"₹686.65", return:"-25.40" ,increase:"3.57%",image:"/tata.png" , color:"red"} ,
        {name:"BSE", price:"₹2697.40", return:"13.80" ,increase:"0.51%",image:"/bse.png",color:""} ,
        {name:"Indraprasth Gas", price:"₹212.33", return:"13.45" ,increase:"6.76%",image:"/indra.png",color:""} ,
    ]

    const TopGainers = [
         {name:"Siemens", price:"₹3350.49", return:"76.60" ,increase:"2.40",image:"/siemens.png",color:""} ,
        {name:"LTIMindtree", price:"₹5544.50", return:"95.00" ,increase:"1.74",image:"/lti.png",color:""} ,
        {name:"Indian Hotel", price:"₹764.90", return:"10.00" ,increase:"1.32",image:"/india.png",color:""} ,
        {name:"Tech Mahindra", price:"₹1715.70", return:"21.80" ,increase:"1.29",image:"/tm.png",color:""} ,
    ]

    const MostTradedinMTF = [
         {name:"Happiest Mind Tech", price:"₹650.80", return:"52.25" ,increase:"9.01",image:"/happy.png",color:""} ,
        {name:"Sterlite Tech", price:"₹111.90", return:"12.55" ,increase:"12.60",image:"/stl.png",color:""} ,
        {name:"Bharat Electronics", price:"₹401.25", return:"-2.75" ,increase:"0.62",image:"/bhel.png",color:"red"} ,
        {name:"Cochin Shipyard", price:"₹2197.90", return:"9.00" ,increase:"0.40",image:"/ship.png",color:""} ,
    ]

    const StocksinNews = [
         {name:"Bajaj Finserv", price:"₹2005.50", return:"-23.20" ,increase:"1.17",image:"/bajaj.png",color:""} ,
        {name:"RateGain", price:"₹436.50", return:"8.30" ,increase:"1.85",image:"/rg.png",color:""} ,
        {name:"Sterlite Tech", price:"₹112.92", return:"14.54" ,increase:"15.10",image:"/stl.png",color:""} ,
        {name:"MCX", price:"₹7933.50", return:"105.00" ,increase:"1.32",image:"/mcx.png",color:""} ,
    ]

    const TopLosers= [
         {name:"Adani Enterprises", price:"₹2484.80", return:"-59.30" ,increase:"2.33",image:"/adani.png",color:"red"} ,
        {name:"Jindal Steel & Power", price:"₹899.70", return:"-22.85" ,increase:"2.47",image:"/jpl.png",color:"red"} ,
        {name:"Divi's Labs", price:"₹6531.00", return:"-156.50" ,increase:"2.34",image:"/divi.png",color:"red"} ,
        {name:"JSW Energy", price:"₹501.20", return:"-11.65" ,increase:"2.27",image:"/jsw.png",color:"red"} ,
    ]
    return (
        <div className="w-screen flex justify-between p-9 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="w-full lg:w-[60vw]">
                {/* Most Traded on Fingenius */}
                <div className="flex justify-between">
                    <h3 className="text-white font-bold text-lg">Most Traded on Fingenius</h3>
                    <Link className="text-emerald-500 text-sm font-semibold">see all</Link>
                </div>

                <div className="flex items-center justify-between mt-5">
                   {MostTraded.map((m,i)=>(
                     <div key={i} className="w-45 h-45 bg-zinc-800 border-1 border-zinc-700 rounded-lg hover:scale-[102%] cursor-pointer">
                        <div className="flex flex-col p-5">
                            <img src={m.image} alt="" className="w-10 h-10 rounded-md" />
                            <p className="text-white text-sm mt-2 font-semibold">{m.name}</p>
                        </div>
                        <div className="mt-2 p-2">
                            <h4 className="text-white text-md font-semibold ml-3">{m.price}</h4>
                            <p className={`${m.color==="red" ? "text-red-500" : "text-emerald-500"} ml-3 text-sm font-semibold`}>{m.return}{" "}<span>({m.increase})</span></p>
                        </div>
                     </div>
                   ))}
                </div>
              {/* top gainers */}
                <div className="flex justify-between mt-15">
                    <h3 className="text-white font-bold text-lg">Top Gainers</h3>
                    <Link className="text-emerald-500 text-sm font-semibold">see all</Link>
                </div>

                <div className="flex items-center justify-between mt-5">
                   {TopGainers.map((m,i)=>(
                     <div key={i} className="w-45 h-45 bg-zinc-800 border-1 border-zinc-700 rounded-lg cursor-pointer hover:scale-[102%]">
                        <div className="flex flex-col p-5">
                            <img src={m.image} alt="" className="w-10 h-10 rounded-md" />
                            <p className="text-white text-sm mt-2 font-semibold">{m.name}</p>
                        </div>
                        <div className="mt-2 p-2">
                            <h4 className="text-white text-md font-semibold ml-3">{m.price}</h4>
                            <p className={`${m.color==="red" ? "text-red-500" : "text-emerald-500"} ml-3 text-sm font-semibold`}>{m.return}{" "}<span>({m.increase})</span></p>
                        </div>
                     </div>
                   ))}
                </div>
              
              {/* MostTradedinMTF */}
              <div className="flex justify-between mt-15">
                    <h3 className="text-white font-bold text-lg">Most Traded in MTF</h3>
                    <Link className="text-emerald-500 text-sm font-semibold">see all</Link>
                </div>

                <div className="flex items-center justify-between mt-5">
                   {MostTradedinMTF.map((m,i)=>(
                     <div key={i} className="w-45 h-45 bg-zinc-800 border-1 border-zinc-700 rounded-lg cursor-pointer hover:scale-[102%]">
                        <div className="flex flex-col p-5">
                            <img src={m.image} alt="" className="w-10 h-10 rounded-md" />
                            <p className="text-white text-sm mt-2 font-semibold">{m.name}</p>
                        </div>
                        <div className="mt-2 p-2">
                            <h4 className="text-white text-md font-semibold ml-3">{m.price}</h4>
                            <p className={`${m.color==="red" ? "text-red-500" : "text-emerald-500"} ml-3 text-sm font-semibold`}>{m.return}{" "}<span>({m.increase})</span></p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="flex justify-between mt-15">
                    <h3 className="text-white font-bold text-lg">Stocks in News</h3>
                    <Link className="text-emerald-500 text-sm font-semibold">see all</Link>
                </div>

                <div className="flex items-center justify-between mt-5">
                   {StocksinNews.map((m,i)=>(
                     <div key={i} className="w-45 h-45 bg-zinc-800 border-1 border-zinc-700 rounded-lg cursor-pointer hover:scale-[102%]">
                        <div className="flex flex-col p-5">
                            <img src={m.image} alt="" className="w-10 h-10 rounded-md" />
                            <p className="text-white text-sm mt-2 font-semibold">{m.name}</p>
                        </div>
                        <div className="mt-2 p-2">
                            <h4 className="text-white text-md font-semibold ml-3">{m.price}</h4>
                            <p className={`${m.color==="red" ? "text-red-500" : "text-emerald-500"} ml-3 text-sm font-semibold`}>{m.return}{" "}<span>({m.increase})</span></p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="flex justify-between mt-15">
                    <h3 className="text-white font-bold text-lg">Top Losers</h3>
                    <Link className="text-emerald-500 text-sm font-semibold">see all</Link>
                </div>

                <div className="flex items-center justify-between mt-5">
                   {TopLosers.map((m,i)=>(
                     <div key={i} className="w-45 h-45 bg-zinc-800 border-1 border-zinc-700 rounded-lg cursor-pointer hover:scale-[102%]">
                        <div className="flex flex-col p-5">
                            <img src={m.image} alt="" className="w-10 h-10 rounded-md" />
                            <p className="text-white text-sm mt-2 font-semibold">{m.name}</p>
                        </div>
                        <div className="mt-2 p-2">
                            <h4 className="text-white text-md font-semibold ml-3">{m.price}</h4>
                            <p className={`${m.color==="red" ? "text-red-500" : "text-emerald-500"} ml-3 text-sm font-semibold`}>{m.return}{" "}<span>({m.increase})</span></p>
                        </div>
                     </div>
                   ))}
                </div>

                <h3 className="text-lg text-white font-bold mt-15">Product & Tools</h3>
                <div className="flex gap-5 mt-5">
                    <div onClick={handlecompare} className="flex cursor-pointer hover:scale-[102%] flex-col w-40 h-25 bg-zinc-800 border-1 border-zinc-700 rounded-lg text-white p-3">
                      <MdCompare className="text-2xl mb-2 mt-2" />
                    <h4>Compare Stocks</h4>
                    </div>
                    <div onClick={handleai} className="flex hover:scale-[102%] cursor-pointer flex-col w-40 h-25 bg-zinc-800 border-1 border-zinc-700 rounded-lg text-white p-3">
                      <SlBadge  className="text-2xl mb-2 mt-2" />
                    <h4>Ask AI</h4>
                    </div>
                </div>
 
            </div>
            <div className="lg:w-[30vw]">
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg cursor-pointer">Your Investments</h3>
                    <Link className="text-emerald-500 font-semibold text-sm cursor-pointer">Dashboard</Link>
                </div>
                <div className="w-full p-4 h-20 border-zinc-600 border-1 rounded-lg shadow-lg mt-5 flex items-center justify-between">
                    <div><h3 className="text-lg font-bold text-white">₹0</h3>
                    <p className="text-sm text-zinc-500 font-semibold">Total Returns</p>
                    </div>
                    <div><h3 className="text-lg font-bold text-white text-right">₹0</h3>
                    <p className="text-sm text-zinc-500 font-semibold">Current Value</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-15">
                    <h3 className="text-white font-semibold text-lg">All watchlists</h3>
                    <Link className="text-emerald-500 font-semibold text-sm">View all</Link>
                </div>

                <div className="w-full flex items-center justify-between h-20 border-zinc-600 border-1 rounded-lg mt-5 p-4">
                    <h3 className="text-white text-md font-semibold">{user.firstname+"'s" +" "+"Watchlist"}</h3>
                    <IoMdArrowDropdown className="text-white text-lg" />
                </div>
                
            </div>
        </div>
    )
}

export default StockShow;
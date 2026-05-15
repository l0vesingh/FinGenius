import React from "react";

function Bar(){
    const show = [
        {name:"NIFTY" , price:"24,946.50" , return:"227.90", increase:"(0.92%)"},
        {name:"SENSEX" , price:"81,796.51" , return:"677.55", increase:"(0.84%)"},
        {name:"BANKNIFTY" , price:"55,944.90" , return:"417.55", increase:"(0.92%)"},
        {name:"MIDCAPNIFTY" , price:"13,107.50" , return:"115.90", increase:"(0.89%)"},
    ]
    return (
        <div className="w-screen h-10 overflow-x-auto whitespace-nowrap scrollbar-hide bg-zinc-900">
            <div className="flex items-center justify-between gap-8 px-5 py-2 lg:px-9 lg:py-2">
                {show.map((s,i)=>(
                    <div key={i} className="flex items-center gap-2">
                        <h4 className="text-md font-semibold text-white ">{s.name}</h4>
                        <h4 className="text-md font-semibold text-white ">{s.price}</h4>
                        <p className="text-sm font-semibold text-emerald-500">{s.return}<span>{s.increase}</span></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bar;
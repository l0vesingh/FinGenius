import React from "react";
import {Routes,Route} from "react-router-dom"
import Landing from "./Pages/Landing";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import StocksPage from "./Pages/StocksPage"
import Protected from "./utils/Protected";
import MutualFundsPage from "./Pages/MutualFundsPage";
import StocksComparison from "./Pages/StocksComparison";
import AiPage from "./Pages/AiPage";
import FundsCompare from "./Pages/FundsCompare"


function App(){
  return(

    <Routes>
     <Route path="/" element={<Landing />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/login" element={<Login />} />
     <Route path="/stocks/user/explore" element={<Protected><StocksPage /></Protected>} />
     <Route path="/Mutual-Funds/user/explore" element={<Protected><MutualFundsPage /></Protected>} />
     <Route path="/stocks/user/compare" element={<Protected><StocksComparison /></Protected>} />
     <Route path="/user/fin/ai" element={<Protected><AiPage /></Protected>} />
     <Route path="/mutual-funds/user/compare" element={<Protected><FundsCompare /></Protected>} />
    </Routes>
    
  )
}

export default App;

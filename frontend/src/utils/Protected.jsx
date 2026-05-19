import React from "react";
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { Navigate } from "react-router-dom"


function Protected({children}){
    const navigate = useNavigate();
 const token = useSelector((state)=>state.token)

 if (!token) return <Navigate to="/" replace />  // ✅


 return children;
}

export default Protected;
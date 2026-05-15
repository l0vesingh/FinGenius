import React from "react";
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

function Protected({children}){
    const navigate = useNavigate();
 const token = useSelector((state)=>state.token)

 if(!token) {
    return navigate("/")
 }

 return children;
}

export default Protected;
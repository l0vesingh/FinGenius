import React, { useState } from "react";
import loginImage from "../assets/login.jpg";
import { Link,useNavigate } from "react-router-dom"; 
import {useSelector,useDispatch} from "react-redux"
import {ToastContainer,toast} from "react-toastify"
import axiosInstance from "../utils/axiosInstance"
import {setLogin} from "../store/reducers/States"

function Login() {
  const [email,setemail]= useState("");
  const [password,setPassword] =useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    const {name,value} = e.target;
    if(name==="email"){
      setemail(value)
    }else if(name==="password"){
      setPassword(value)
    }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await axiosInstance.post("/auth/login",{
        email,
        password
      })

      const loggedIn = response.data
    
      if(loggedIn){
        dispatch(setLogin({
          user:loggedIn.user,
          token:loggedIn.token
        }))
        
        
        toast("📈 User logged in successfully!", {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
            });
        
            setTimeout(()=>{
              navigate("/stocks/user/explore");
            },5000);
      }

    }catch(err){
      console.log(err)
    }
  } 
  return (
    <div className="flex bg-zinc-900">
      <div className="w-screen h-screen md:w-[60vw] px-12 p-8 pt-12 bg-black">
        <div className="lg:w-[70%] h-3/4 md:h-full mt-10 md:mt-0 flex flex-col justify-center">
          <h1 className="text-white text-3xl">Welcome Back</h1>
          <p className="text-md text-zinc-300 mt-3">
            Login to continue your trading journey.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 pt-10">
              <input
                type="email"
                placeholder="JohnDoe@yahoo.com"
                name="email"
                value={email}
                onChange={handleChange}
                className="bg-slate-200/70 text-black border border-zinc-100 rounded-md px-4 py-2 mt-4 "
              />
              <input
                type="password"
                placeholder="Min 6 characters"
                name="password"
                value={password}
                onChange={handleChange}
                className="bg-slate-200/70 text-black border border-zinc-100 rounded-md px-4 py-2 mt-4 "
              />
            </div>
            <button type="submit" className="mt-10 cursor-pointer text-white w-full font-semibold px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 transition">
              LOGIN
            </button>
            <p className="text-white mt-2">Dont have an Account? 
                <Link to="/signup" className="text-blue-600 ml-1 underline">SignUp</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden md:flex w-[40vw] h-screen items-center justify-between bg-black bg-cover bg-no-repeat overflow-hidden p-8">
        <img
          src={loginImage}
          alt="loginimage"
          className="w-65 lg:w-[100%] lg:h-[70vh]"
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;

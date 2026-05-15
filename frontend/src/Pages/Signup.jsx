import React, { useState } from "react";
import signup from "../assets/signup.jpg";
import { Link, useNavigate } from "react-router-dom"; 
import axiosInstance from "../utils/axiosInstance";
import {ToastContainer,toast} from "react-toastify";

function Signup() {
   
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e)=>{
    const { name, value } = e.target;
    if (name === "firstname") {
      setFirstname(value);
    } else if (name === "lastname") {
      setLastname(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const response = await axiosInstance.post("/auth/signup",{
      firstname,
      lastname,
      email,
      password
    })

    if (response.status === 201) {
      toast("📈 Account created successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
    });

    setTimeout(()=>{
      navigate("/login");
    },5000);
    
  }
}
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pb-8 pt-12 bg-black">
        <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
          <h1 className="text-white text-3xl">Create an Account</h1>
          <p className="text-md text-zinc-300 mt-3">
            Join the world of effortless trading.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  pt-10">
              <input
                type="text"
                placeholder="John"
                name="firstname"
                value={firstname}
                onChange={handleChange}
                className="bg-slate-200/70 text-black text-md border border-zinc-100 rounded-md px-4 py-2 mt-4"
              />
              <input
                type="text"
                placeholder="Doe"
                name="lastname"
                value={lastname}
                onChange={handleChange}
                className="bg-slate-200/70 text-black border border-zinc-100 rounded-md px-4 py-2 mt-4"
              />
              <input
                type="email"
                placeholder="JohnDoe@yahoo.com"
                name="email"
                value={email}
                onChange={handleChange}
                className="bg-slate-200/70 text-black border border-zinc-100 rounded-md px-4 py-2 mt-4"
              />
              <input
                type="password"
                placeholder="Min 6 characters"
                name="password"
                value={password}
                onChange={handleChange}
                className="bg-slate-200/70 text-black border border-zinc-100 rounded-md px-4 py-2 mt-4"
              />
            </div>
            <button type="submit" className="cursor-pointer mt-10 text-white w-full font-semibold px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 transition">
              SIGNUP
            </button>
            <p className="text-white mt-2">
              Already have an account?
              <Link to="/login" className="text-blue-600 ml-1 underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden md:flex w-[40vw] h-screen items-center justify-between bg-black bg-cover bg-no-repeat overflow-hidden p-8">
        <img
          src={signup}
          alt="signupimg"
          className="w-65 lg:w-[100%] lg:h-[40vh]"
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;

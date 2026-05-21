// import React, { useState } from "react";
// import loginImage from "../assets/login.jpg";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux"
// import { ToastContainer, toast } from "react-toastify"
// import axiosInstance from "../utils/axiosInstance"
// import { setLogin } from "../store/reducers/States"
// console.log("Login component loaded");
// import { setAuthToken } from "../utils/axiosInstance";



// function Login() {
//   const [email, setemail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "email") {
//       setemail(value)
//     } else if (name === "password") {
//       setPassword(value)
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post("/auth/login", {
//         email,
//         password
//       })

//       const loggedIn = response.data

//       if (loggedIn) {
//         dispatch(setLogin({
//           user: loggedIn.user,
//           token: loggedIn.token
//         }))
//         setAuthToken(loggedIn.token);



//         toast("📈 User logged in successfully!", {
//           position: "top-right",
//           autoClose: 5000,
//           theme: "dark",
//         });

//         setTimeout(() => {
//           navigate("/stocks/user/explore");
//         }, 5000);
//       }

//     } catch (err) {
//       console.error(err);
//       toast("❌ Login failed. Check your credentials.", {
//         position: "top-right",
//         autoClose: 4000,
//         theme: "dark",
//       });
//     }
//     return (
//       <div className="flex bg-zinc-900 min-h-screen w-screen">
//         <div className="w-screen h-screen md:w-[60vw] px-12 p-8 pt-12 bg-black">
//           <div className="lg:w-[70%] h-3/4 md:h-full mt-10 md:mt-0 flex flex-col justify-center">
//             <h1 className="text-white text-3xl">Welcome Back</h1>
//             <p className="text-md text-zinc-300 mt-3">
//               Login to continue your trading journey.
//             </p>
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 gap-4 pt-10">
//                 <input
//                   type="email"
//                   placeholder="JohnDoe@yahoo.com"
//                   name="email"
//                   value={email}
//                   onChange={handleChange}
//                   className="bg-slate-200/70 text-black border border-zinc-100 rounded-md px-4 py-2 mt-4 "
//                 />
//                 <input
//                   type="password"
//                   placeholder="Min 6 characters"
//                   name="password"
//                   value={password}
//                   onChange={handleChange}
//                   className="bg-slate-200/70 text-black border border-zinc-100 rounded-md px-4 py-2 mt-4 "
//                 />
//               </div>
//               <button type="submit" className="mt-10 cursor-pointer text-white w-full font-semibold px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 transition">
//                 LOGIN
//               </button>
//               <p className="text-white mt-2">Dont have an Account?
//                 <Link to="/signup" className="text-blue-600 ml-1 underline">SignUp</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//         <div className="hidden md:flex w-[40vw] h-screen items-center justify-between bg-black bg-cover bg-no-repeat overflow-hidden p-8">
//           <img
//             src={loginImage}
//             alt="loginimage"
//             className="w-65 lg:w-[100%] lg:h-[70vh]"
//           />
//         </div>
//         <ToastContainer />
//       </div>
//     );
//   }
// }
//   export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import { setLogin } from "../store/reducers/States";
import { FaChartLine } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/auth/login", { email, password });
      const loggedIn = response.data;
      if (loggedIn) {
        dispatch(setLogin({ user: loggedIn.user, token: loggedIn.token }));
        toast("📈 Logged in successfully!", { position: "top-right", autoClose: 3000, theme: "dark" });
        setTimeout(() => navigate("/stocks/user/explore"), 3000);
      }
    } catch (err) {
      console.error(err);
      toast("❌ Invalid email or password.", { position: "top-right", autoClose: 4000, theme: "dark" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", backgroundColor: "#09090b", fontFamily: "Poppins, sans-serif" }}>

      {/* Left Panel */}
      <div style={{ width: "45%", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f172a 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem", position: "relative", overflow: "hidden" }}>
        
        {/* Background glow */}
        <div style={{ position: "absolute", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", top: "20%", left: "50%", transform: "translateX(-50%)" }} />
        <div style={{ position: "absolute", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)", bottom: "20%", left: "30%" }} />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2.5rem", zIndex: 1 }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, #6366f1, #a855f7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FaChartLine style={{ color: "white", fontSize: "22px" }} />
          </div>
          <span style={{ color: "white", fontSize: "1.8rem", fontWeight: "700", letterSpacing: "-0.5px" }}>FinGenius</span>
        </div>

        {/* Tagline */}
        <h2 style={{ color: "white", fontSize: "1.6rem", fontWeight: "700", textAlign: "center", lineHeight: "1.4", marginBottom: "1rem", zIndex: 1 }}>
          Your AI-Powered<br />
          <span style={{ background: "linear-gradient(to right, #6366f1, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Investment Partner
          </span>
        </h2>
        <p style={{ color: "#71717a", fontSize: "0.9rem", textAlign: "center", maxWidth: "280px", lineHeight: "1.6", zIndex: 1 }}>
          Track stocks, analyze mutual funds, and get AI-driven insights — all in one place.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: "2rem", marginTop: "3rem", zIndex: 1 }}>
          {[{ value: "10K+", label: "Users" }, { value: "50+", label: "Stocks" }, { value: "99%", label: "Uptime" }].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ color: "white", fontWeight: "700", fontSize: "1.2rem" }}>{s.value}</div>
              <div style={{ color: "#52525b", fontSize: "0.75rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem" }}>
        <div style={{ width: "100%", maxWidth: "400px" }}>

          <h1 style={{ color: "white", fontSize: "1.8rem", fontWeight: "700", marginBottom: "0.4rem" }}>Welcome back</h1>
          <p style={{ color: "#71717a", fontSize: "0.9rem", marginBottom: "2.5rem" }}>Enter your credentials to access your portfolio</p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#a1a1aa", fontSize: "0.85rem", fontWeight: "500" }}>Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #27272a", backgroundColor: "#18181b", color: "white", fontSize: "0.95rem", outline: "none", transition: "border 0.2s" }}
                onFocus={(e) => e.target.style.border = "1px solid #6366f1"}
                onBlur={(e) => e.target.style.border = "1px solid #27272a"}
              />
            </div>

            {/* Password */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ color: "#a1a1aa", fontSize: "0.85rem", fontWeight: "500" }}>Password</label>
                <a href="#" style={{ color: "#6366f1", fontSize: "0.8rem", textDecoration: "none" }}>Forgot password?</a>
              </div>
              <input
                type="password"
                placeholder="Min 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #27272a", backgroundColor: "#18181b", color: "white", fontSize: "0.95rem", outline: "none" }}
                onFocus={(e) => e.target.style.border = "1px solid #6366f1"}
                onBlur={(e) => e.target.style.border = "1px solid #27272a"}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              style={{ marginTop: "0.5rem", padding: "0.85rem", borderRadius: "10px", background: loading ? "#3f3f46" : "linear-gradient(to right, #6366f1, #a855f7)", color: "white", fontWeight: "600", fontSize: "1rem", border: "none", cursor: loading ? "not-allowed" : "pointer", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => { if (!loading) e.target.style.opacity = "0.85" }}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "0.5rem 0" }}>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#27272a" }} />
              <span style={{ color: "#52525b", fontSize: "0.8rem" }}>or</span>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#27272a" }} />
            </div>

            <p style={{ color: "#71717a", textAlign: "center", fontSize: "0.9rem" }}>
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: "#a855f7", fontWeight: "600", textDecoration: "none" }}>
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
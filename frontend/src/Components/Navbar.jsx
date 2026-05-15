import React, { useEffect, useState, useRef } from "react";
import { FaChartLine } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { setLogout } from "../store/reducers/States";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMdWallet } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa6";

function Navbar() {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [userdropdown, setuserdropdown] = useState(false);
  const userDropdownref = useRef(null);
  const dropdowRef = useRef(null);
  const navigate = useNavigate();
  const handleSignupclick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handlelogout = () => {
    console.log("log out clicked")
    dispatch(setLogout());
  };

  const toggledropdown = () => setDropdownMenu(!dropdownMenu);
  const toggleuserdrop = () => setuserdropdown(!userdropdown);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        userDropdownref.current &&
        !userDropdownref.current.contains(e.target) && !e.target.closest(".logout-button")
      ) {
        setuserdropdown(false);
      }
    };
    const handleClik = (e) => {
      if (dropdowRef.current && !dropdowRef.current.contains(e.target)) {
        setDropdownMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClik);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClik);
    };
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-10 py-5 text-white flex items-center justify-between">
      <div className="logo flex gap-3">
        <Link to="/">
          <FaChartLine className="lg:text-3xl text-2xl  text-blue-600" />
        </Link>
        {user ? (
          <div className="flex gap-3">
            <Link
              to="/stocks/user/explore"
              className={`lg:text-xl text-xl font-semibold hover:text-white ${location.pathname==="/stocks/user/explore" ? "text-white" : "text-zinc-500"}`}
            >
              STOCKS
            </Link>
            <Link
              to="/Mutual-Funds/user/explore"
              className={`lg:text-xl text-xl font-semibold hover:text-white ${location.pathname === "/Mutual-Funds/user/explore" ? "text-white" : "text-zinc-500"}`}
            >
              MUTUAL FUNDS
            </Link>
          </div>
        ) : (
          <Link to="/" className="lg:text-2xl text-xl font-semibold">
            FinGenius
          </Link>
        )}
      </div>
        {user ? (
          <div className="lg:hidden flex gap-3 items-center">
            <IoIosNotifications className="text-zinc-400 hover:text-white font-semibold text-2xl cursor-pointer" />
            <div className="rounded-full h-10 w-10 hover:bg-rose-400 bg-rose-700 flex justify-center items-center gap-1 cursor-pointer text-white font-semibold text-md">
              <button onClick={toggleuserdrop} className="capitalize" >{user.firstname[0]}</button>
            
            {userdropdown && (
                <div
                  ref={userDropdownref}
                  className="absolute right-15 mt-76 w-80 bg-zinc-900 border-1 border-zinc-700 rounded-md shadow-lg z-[9999]"
                >
                  <ul className="py-1 text-white">
                    <li className="px-4 py-2 rounded-md cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <h3 className="text-lg">
                            {user.firstname + " " + user.lastname}
                          </h3>
                          <p className="text-sm text-zinc-500">{user.email}</p>
                        </div>
                        <IoMdSettings className="text-white text-lg" />
                      </div>
                    </li>
                    <hr className="text-zinc-700" />
                    <li>
                      <div className="flex gap-5">
                        <div className="mt-5">
                          <IoMdWallet className="text-white text-lg font-bold ml-4" />
                        </div>
                        <div className="mt-4 ">
                          <h4 className="text-white text-md">₹ 40,000</h4>
                          <p className="text-zinc-500 text-sm">Wallet</p>
                        </div>
                      </div>
                    </li>
                    <hr className="text-zinc-700 mt-2"/>
                    <li><div className="flex gap-5">
                        <div className="mt-5">
                          <FaClipboardList className="text-white text-lg font-bold ml-4" />
                        </div>
                        <div className="mt-4 ">
                          <h4 className="text-white text-md">All Orders</h4>
                        </div>
                      </div></li>
                      <hr className="text-zinc-700 mt-6"/>
                    <li className="px-4 py-2 cursor-pointer mt-2">
                      <button className="logout-button pointer-events-auto" onClick={handlelogout}>Log Out</button>
                    </li>
                  </ul>
                </div>
              )}
              </div>
          </div>
        ) : (
          <button
            onClick={toggledropdown}
            className="lg:hidden text-xl cursor-pointer"
          >
            <IoMenu />
          </button>
        )}
        {dropdownMenu && !user && (
          <div
            ref={dropdowRef}
            className="absolute right-10 top-10 mt-1 w-40 bg-zinc-900 border-zinc-700 border-2 rounded-md shadow-lg z-[9999]"
          >
            <ul className="py-1 text-white">
              <li className="px-4 py-2 hover:bg-gray-300 hover:text-black rounded-md cursor-pointer"><a href="#Feature">Features</a></li>
              <hr className="text-zinc-700 mt-3"/>
              <li className="px-4 py-2 hover:bg-gray-300 hover:text-black rounded-md cursor-pointer"><a href="#Team">About Us</a></li>
              <hr className="text-zinc-700 mt-3"/>
              <li className="px-4 py-2 hover:bg-gray-300 hover:text-black rounded-md cursor-pointer"><a href="#Footer">Contacts</a></li>
              <hr className="text-zinc-700 mt-3"/>
              <li className="px-4 py-2 hover:bg-gray-300 hover:text-black rounded-md cursor-pointer">
                <Link to="/signup">Sign Up</Link>
              </li>
              <hr className="text-zinc-700 mt-3"/>
              <li className="px-4 py-2 hover:bg-gray-300 hover:text-black rounded-md cursor-pointer">
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </div>
        )}
      
      <div className="links hidden lg:flex items-center justify-between gap-10">
        {user ? (
          <div className="flex items-center h-50px border mr-60 border-gray-400 rounded-md gap-2 px-6 py-2 hover:border-white shadow-lg">
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className="outline-none text-zinc-400"
            />
            <FaSearch className="text-md text-zinc-600 hover:text-zinc-100 cursor-pointer font-medium" />
          </div>
        ) : (
          <>
            <a
              href="#Feature"
              className="text-sm font-semibold hover:text-zinc-400"
            >
              Features
            </a>
            <a
              href="#Team"
              className="text-sm font-semibold hover:text-zinc-400"
            >
              About Us
            </a>
            <a
              href="#Footer"
              className="text-sm font-semibold hover:text-zinc-400"
            >
              Contacts
            </a>
          </>
        )}
      </div>
      <div className="buttons hidden lg:flex gap-5 py-2">
        {user ? (
          <div className="flex gap-3 items-center">
            <IoIosNotifications className="text-zinc-400 hover:text-white font-semibold text-2xl cursor-pointer" />
            <div className="rounded-full h-10 w-10 bg-rose-700 hover:bg-rose-400 flex justify-center items-center gap-1 cursor-pointer text-white font-semibold text-md">
              <button className="h-6 w-6 capitalize"  onClick={toggleuserdrop}>
                {user.firstname[0]}
              </button>
              {userdropdown && (
                <div
                  ref={userDropdownref}
                  className="absolute right-15 mt-76 w-80 bg-zinc-900 border-1 border-zinc-700 rounded-md shadow-lg z-9999"
                >
                  <ul className="py-1 text-white">
                    <li className="px-4 py-2 rounded-md cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <h3 className="text-lg">
                            {user.firstname + " " + user.lastname}
                          </h3>
                          <p className="text-sm text-zinc-500">{user.email}</p>
                        </div>
                        <IoMdSettings className="text-white text-lg" />
                      </div>
                    </li>
                    <hr className="text-zinc-700" />
                    <li>
                      <div className="flex gap-5">
                        <div className="mt-5">
                          <IoMdWallet className="text-white text-lg font-bold ml-4" />
                        </div>
                        <div className="mt-4 ">
                          <h4 className="text-white text-md">₹ 40,000</h4>
                          <p className="text-zinc-500 text-sm">Wallet</p>
                        </div>
                      </div>
                    </li>
                    <hr className="text-zinc-700 mt-2"/>
                    <li><div className="flex gap-5">
                        <div className="mt-5">
                          <FaClipboardList className="text-white text-lg font-bold ml-4" />
                        </div>
                        <div className="mt-4 ">
                          <h4 className="text-white text-md">All Orders</h4>
                        </div>
                      </div></li>
                      <hr className="text-zinc-700 mt-6"/>
                    <li className="px-4 py-2 cursor-pointer mt-2">
                      <button onClick={handlelogout}>Log Out</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={handleSignupclick}
              className="text-sm rounded-lg bg-zinc-600 px-5 py-2 font-semibold hover:bg-zinc-400"
            >
              Sign Up
            </button>
            <button
              onClick={handleLoginClick}
              className="text-sm rounded-lg bg-zinc-600 px-5 py-2 font-semibold hover:bg-zinc-400"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;

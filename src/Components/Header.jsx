import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import profilepix from "../assets/profilepix.png";
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/UserSlice";
import { toast } from "react-hot-toast";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/Constants";
import { chooseLang } from "../utils/ConfigSlice";
import { toggleGptSearchView, removeGptResponse } from "../utils/GptSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isGpt = useSelector((state) => state.GptSlice.showGptSearch);
  const [openList, setOpenList] = useState(false);

  const selectHandler = (e) => {
    dispatch(chooseLang(e.target.value));
  };

  const mouseHandler = () => {
    setOpenList(!openList);
  };

  const gptSearchHandler = () => {
    if (isGpt) {
      navigate("/browse");
      dispatch(removeGptResponse());
    }
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      toast.success("You have been signed out.");
      navigate("/");
    } catch (error) {
      alert(`Sign-out failed: ${error.message}`);
    }
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full z-50 flex flex-col sm:flex-row items-center justify-between ${
        user === null ? "bg-gradient-to-b from-black" : "bg-black"}`
      }>

        {/* Netflix Logo */}
        <img className="lg:w-48 w-44 mt-1" src={NETFLIX_LOGO} alt="Netflix Logo" />
        <div>

        
          {!user && ( <div className="mt-4 absolute top-0 right-0 lg:relative md:relative flex items-center space-x-4">
              {/* Language Selector */}
              <select
                className="py-1 text-sm px-1 mr-2 lg:px-2 lg:py-2 lg:mr-4 lg:text-xl rounded-lg text-white font-semibold bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-lg"
                name="config"
                id="config"
                onChange={selectHandler}
              >
                {SUPPORTED_LANGUAGES.map((ele) => (
                  <option
                    className="text-black text-sm  lg:text-lg bg-white hover:bg-red-100 font-medium"
                    value={ele.identifier}
                    key={ele.identifier}
                  >
                    {ele.name}
                  </option>
                ))}
              </select>
            </div>
           )
          }
          {/* User Profile Section */}

          {user && (
            <div className="relative flex items-center space-x-4 px-4 sm:px-8">
              
              <select
                className="py-2 px-4 rounded-lg text-white font-semibold bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-lg"
                name="config"
                id="config"
                onChange={selectHandler}
              >
                {SUPPORTED_LANGUAGES.map((ele) => (
                  <option
                    className="text-black text-sm sm:text-base lg:text-lg bg-white hover:bg-red-100 font-medium"
                    value={ele.identifier}
                    key={ele.identifier}
                  >
                    {ele.name}
                  </option>
                ))}
              </select>

              {/* GPT SEARCH */}
              <button
                onClick={gptSearchHandler}
                className="text-white bg-purple-700 px-4 py-2 rounded-md hover:bg-purple-600 transition-all"
              >
                {isGpt ? "Home Page" : "Gpt Search"}
              </button>

              {/* profile img  */}
              <div className="flex items-center cursor-pointer">
                <img
                  className=" w-10 h-10 sm:w-[40px] sm:h-[40px]"
                  src={profilepix}
                  alt="User Profile"
                />
                <IoMdArrowDropdown 
                  color="white"
                  onMouseOver={mouseHandler}
                  size={24}
                  className="ml-3 mr-4"
                />
              </div>

              {/* Dropdown Menu */}
              {openList && (
                <div className="absolute top-12 sm:top-[70px] right-4 sm:right-12 bg-white border shadow-lg rounded-md w-48">
                  <p className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100">
                    {user.displayName}
                  </p>
                  <hr className="my-2" />
                  <button
                    className="px-4 py-2 w-full text-red-600 font-medium hover:bg-red-50 text-left"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        


      </div>

     
    </div>
  );
};

export default Header;

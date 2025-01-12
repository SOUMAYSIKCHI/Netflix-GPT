import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import profilepix from "../assets/profilepix.png";
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/UserSlice";
import { toast } from "react-hot-toast";
import { SUPPORTED_LANGUAGES } from "../utils/Constants";
import { chooseLang } from "../utils/ConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [openList, setOpenList] = useState(false);

  const selectHandler = (e) =>{
    dispatch(chooseLang(e.target.value));
    console.log(e.target.value);
  }


  const mouseHandler = () => {
    setOpenList(!openList);
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
      className={`absolute top-0 left-0 w-full flex z-50 ${
        user === null ? "bg-gradient-to-b from-black" : "bg-black"
      }`}
    >
      <div className="flex justify-between w-full px-8">
        <img
          className="w-48"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
        <div className="mt-[22px]">
          <select
            className="py-2 px-4 rounded-lg text-white font-semibold bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-lg"
            name="config"
            id="config"
            onChange={selectHandler}
          >
            {SUPPORTED_LANGUAGES.map((ele) => (
              <option
                className="text-black bg-white hover:bg-red-100 font-medium"
                value={ele.identifier}
                key={ele.identifier}
              >
                {ele.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {user && (
        <div className="flex items-center mr-4">
          <div className="flex cursor-pointer">
            <img
              className="rounded w-[40px] h-[40px]"
              src={profilepix}
              alt=""
            />
            <IoMdArrowDropdown
              color="white"
              onMouseOver={mouseHandler}
              size={28}
            />
          </div>

          {openList && (
            <div className="absolute top-[70px] right-12 bg-white border shadow-lg rounded-md">
              <p className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100">
                {user.displayName}
              </p>
              <hr className="my-2" />
              <button
                className="px-4 py-2 text-red-600 font-medium hover:bg-red-50"
                onClick={handleSignOut}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;

import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import {
  signOut,
} from "firebase/auth";
import { removeUser } from "../utils/UserSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state =>state.user);
   const handleSignOut = async () => {
      try {
        await signOut(auth);
        dispatch(removeUser());
        alert("You have been signed out.");
        navigate('/');
      } catch (error) {
        alert(`Sign-out failed: ${error.message}`);
      }
    };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black">
      <div className="flex justify-center lg:justify-start"> {/* Responsive alignment */}
        <img
          className="w-48 lg:ml-[8rem]" // Margin left on large screens only
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>
     {
      user &&
      <div>
        <p>{user.displayName}</p>
        <button onClick={handleSignOut}>Logout</button>
      </div>
     }
    </div>
  );
};

export default Header;

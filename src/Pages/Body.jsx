import React, { useRef, useState,useEffect } from "react";
import Header from "../Components/Header";
import FreqItem from "../Components/FreqItem";
import { freqdata } from "../utils/freqdata";
import { validate } from "../utils/validate";
import { auth, googleProvider } from "../../firebase";
import {onAuthStateChanged,updateProfile  } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser,removeUser} from "../utils/UserSlice"
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword 
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Body = () => {
  const [signUp, setSignUp] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const firstname = useRef(null);
  const [showIndex, setShowIndex] = useState(null);
  const [validatestmt, setValidateStmt] = useState(null);
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName}= user;
        dispatch(addUser({uid,email,displayName}));
        navigate(`/browse`);
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/')
      }
    });
  },[])

  function setShowIndex1(index) {
    if (showIndex === index) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  }

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      toast.success(`Welcome, ${user.displayName}!`);
    } catch (error) {
      toast.error(`Sign-in failed: ${error.message}`);
    }
  };

 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationMessage = validate(
      email.current.value,
      password.current.value
    );
    setValidateStmt(validationMessage);

    if (validationMessage !== null) {
      toast.error(validationMessage);
      return;
    }

    if (signUp) {
      // signup login
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: firstname.current.value
          }).then(() => {
            const {uid,email,displayName}= user;
            dispatch(addUser({uid,email,displayName}));
            // Profile updated!
    

          }).catch((error) => {
            // An error occurred
            // ...
          });
          
          console.log(user);
          toast.success("Signup Success");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateStmt(errorMessage);
          toast.error(errorMessage);
          // ..
        });
    } else {
      //sign in login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.success("Login Success", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error("Wrong Credentials entered",errorMessage);
        });
    }
  };

  return (
    <div className="w-full font-Segoe UI Symbol">
      <Header />
      {/* Background Image */}
      <div className="w-full">
        <img
          className="h-screen w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          alt="Netflix Background"
        />
      </div>

      {/* Form */}
      <div className="absolute text-white w-full top-[102px] opacity-90">
        <form
          className="mx-8 sm:w-9/12 md:w-3/4 lg:w-4/12 font-Segoe UI Symbol bg-black rounded-md lg:px-14 md:px-14 py-10 lg:mx-auto md:mx-auto px-10"
          onSubmit={handleFormSubmit}
        >
          <h1 className="font-bold text-xl lg:text-3xl md:text-3xl">
            {signUp ? "Sign Up" : "Sign In"}
          </h1>
          {signUp && (
            <input
              className="mt-6 px-4 py-2 text-[20px] w-full rounded-sm bg-black opacity-90 border-2 border-gray-700"
              type="text"
              name="firstname"
              ref={firstname}
              placeholder="Name"
            />
          )}
          <input
            className="mt-6 px-4 py-2 text-[20px] w-full rounded-sm bg-black opacity-90 border-2 border-gray-700"
            type="email"
            name="email"
            ref={email}
            placeholder="Email"
          />
          <input
            className="mt-6 px-4 py-2 text-[20px] w-full rounded-sm bg-black opacity-90 border-2 border-gray-700"
            type="password"
            name="password"
            ref={password}
            placeholder="Password"
          />

          <p className="mt-6 px-4 py-2 text-[20px] text-red-500">
            {validatestmt}
          </p>

          <button
            type="submit"
            className="mt-6 px-4 py-2 text-[20px] w-full rounded-md bg-red-700 opacity-100"
          >
            {signUp ? "Sign Up" : "Sign In"}
          </button>
          <p className="w-full text-center mt-4 font-bold text-xl">Or</p>

          <button
            type="button"
            onClick={handleSignIn}
            className="mt-4 px-2 py-2 text-[20px] w-full rounded-md border-white border-2 text-white"
          >
            Sign In with Google
          </button>

          <p
            onClick={() => setSignUp(!signUp)}
            className="mt-6 text-xl font-bold cursor-pointer"
          >
            {signUp ? "Already have an Account?" : "New to Netflix?"}{" "}
            <span className="text-red-800">
              {signUp ? "Sign in now." : "Sign up now."}
            </span>
          </p>
        </form>
      </div>

      {/* Footer */}
      <div className="bg-black text-white">
        <div className="lg:w-4/5 md:w-4/5 p-6 md:mx-auto lg:mx-auto">
          <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
          {freqdata.map((ele, index) => (
            <FreqItem
              key={ele.title}
              ele={ele}
              showItems={index === showIndex}
              setShowIndex1={() => setShowIndex1(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

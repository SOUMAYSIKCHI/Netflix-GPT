import React, { useRef, useState,useEffect } from "react";
import Header from "../Components/Header";
import FreqItem from "../Components/FreqItem";
import { freqdata } from "../utils/freqdata";
import { validate } from "../utils/validate";
import lang from "../utils/LangConst"
import { auth, googleProvider } from "../../firebase";
import {onAuthStateChanged,updateProfile  } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import {addUser,removeUser} from "../utils/UserSlice"
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword 
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BG_URL } from "../utils/Constants";

export const Body = () => {
  const [signUp, setSignUp] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const firstname = useRef(null);
  const [showIndex, setShowIndex] = useState(null);
  const [validatestmt, setValidateStmt] = useState(null);
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const selectedLang = useSelector(state => state.config.language);
  
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
          src={BG_URL}
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
            {signUp ?  lang[selectedLang].SignUp : lang[selectedLang].SignIn} 
          </h1>
          {signUp && (
            <input
              className="mt-6 px-4 py-2 text-[20px] w-full rounded-sm bg-black opacity-90 border-2 border-gray-700"
              type="text"
              name="firstname"
              ref={firstname}
              placeholder= {lang[selectedLang].NamePlaceholder}
            />
          )}
          <input
            className="mt-6 px-4 py-2  text-lg lg:text-xl md:text-xl w-full rounded-sm bg-black opacity-90 border-2 border-gray-700"
            type="email"
            name="email"
            ref={email}
            placeholder={lang[selectedLang].EmailPlaceholder}
          />
          <input
            className="mt-6 px-4 py-2  text-lg lg:text-xl md:text-xl w-full rounded-sm bg-black opacity-90 border-2 border-gray-700"
            type="password"
            name="password"
            ref={password}
            placeholder={lang[selectedLang].PasswordPlaceholder}
          />

          <p className="mt-6 px-4 py-2  text-lg lg:text-xl md:text-xl text-red-500">
            {validatestmt}
          </p>

          <button
            type="submit"
            className="mt-6 px-4 py-2  text-lg lg:text-xl md:text-xl w-full rounded-md bg-red-700 opacity-100"
          >
            {signUp ? lang[selectedLang].SignUp : lang[selectedLang].SignIn}
          </button>
          <p className="w-full text-center mt-4 font-bold text-xl">Or</p>

          <button
            type="button"
            onClick={handleSignIn}
            className="mt-4 px-2 py-2  text-lg lg:text-xl md:text-xl w-full rounded-md border-white border-2 text-white"
          >
            { lang[selectedLang].SignInwithGoogle}
          </button>

          <p
            onClick={() => setSignUp(!signUp)}
            className="mt-6 text-lg lg:text-xl md:text-xl  font-bold cursor-pointer"
          >
            {signUp ? lang[selectedLang].Already_have_an_Account : lang[selectedLang].New_to_Netflix}{" "}
            <span className="text-red-800">
              {signUp ? lang[selectedLang].Sign_in_now : lang[selectedLang].Sign_up_now}
            </span>
          </p>
        </form>
      </div>

      {/* Footer */}
      <div className="bg-black text-white">
        <div className="lg:w-4/5 md:w-4/5 p-6  md:mx-auto lg:mx-auto">
          <h1 className=" text-xl lg:text-2xl md:text-2xl font-bold">{ lang[selectedLang].Frequently_Asked_Questions}</h1>
          {freqdata[selectedLang].map((ele, index) => (
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

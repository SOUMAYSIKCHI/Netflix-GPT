import React from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import lang from "../utils/LangConst";
import { useSelector } from "react-redux";
import { BG_URL } from "../utils/Constants";

const NotFound = () => {
  const selectedLang = useSelector((state) => state.config.language);
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/browse");
  }
  return (
    <div className="bg-black">
      <Header />
      <div className="w-full">
        <img
          className="h-screen w-full object-cover opacity-40"
          src={BG_URL}
          alt="Netflix Background"
        />
      </div>
      <div className=" absolute top-[45%] left-[35%] text-white">
        <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold">
          {lang[selectedLang].page_not_found}
        </h1>
        <p className="mt-2">{lang[selectedLang].page_not_exist}</p>
        <button
          onClick={clickHandler}
          className="mt-4 rounded-md px-5 py-2 text-white text-2xl bg-red-700"
        >
          {lang[selectedLang].Go_Back}
        </button>
        </div>
      </div>

    </div>
  );
};

export default NotFound;

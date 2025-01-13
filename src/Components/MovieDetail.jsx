import React from "react";
import { FaPlay } from "react-icons/fa";
import { useSelector } from "react-redux";
import lang from "../utils/LangConst"

const MovieDetail = ({ title, desc }) => {
  const selectedLang = useSelector(state => state.config.language);

  return (
    <div className="absolute aspect-video w-screen  text-white  ">

      <div className="mt-[50%] mb-[20px]  lg:mt-[20%] ml-[2%] ">
        <h5 className="font-bold text-2xl">{title}</h5>
        <p className="w-[30%] font-thin lg:inline-block mt-2 hidden">{desc}</p>
        <div className="flex items-center gap-4 mt-3">
          <button className="px-3 py-2  lg:px-8 lg:py-2 bg-white text-black font-bold text-sm rounded-md flex items-center gap-1 lg:text-xl">
            <FaPlay size={12} />
            {lang[selectedLang].Play_Now}
          </button>
          <button className="lg:px-8 lg:py-2 bg-black hidden lg:inline-block text-white bg-opacity-90 font-bold text-xl rounded-md">
          {lang[selectedLang].More_Info}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

import React from "react";
import { FaPlay } from "react-icons/fa";

const MovieDetail = ({ title, desc }) => {
  return (
    <div className="absolute aspect-video w-screen  text-white  ">

      <div className="mt-[20%] ml-[2%]">
        <h5 className="font-bold text-2xl">{title}</h5>
        <p className="w-[30%] font-thin mt-2">{desc}</p>
        <div className="flex items-center gap-4 mt-3">
          <button className="px-8 py-2 bg-white text-black font-bold text-xl rounded-md flex items-center gap-1">
            <FaPlay size={12} />
            Play
          </button>
          <button className="px-8 py-2 bg-black text-white bg-opacity-90 font-bold text-xl rounded-md">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

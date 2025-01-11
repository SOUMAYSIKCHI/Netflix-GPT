import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const FreqItem = ({ ele, setShowIndex1, showItems }) => {
  const handleClick = () => {
    setShowIndex1();
  };
  return (
    <div className="w-full lg:text-2xl md:text-2xl bg-[rgb(45,45,45)] lg:py-6  py-2 mt-4 ">
      <div
        onClick={handleClick}
        className="flex lg:px-6 md:px-6 px-3 pb-2 items-center justify-between cursor-pointer"
      >
        <h3 className="font-semibold">{ele.title}</h3>
        {showItems ? <RxCross2 size={40} /> : <CiSquarePlus size={40} />}
      </div>
      {showItems && (
        <div className="mb-6">
          <div className="h-0.5 mt-2 w-full bg-black"></div>
          <p className="px-6 mt-8 ">{ele.ans}</p>
        </div>
      )}
    </div>
  );
};

export default FreqItem;

import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const FreqItem = ({ ele, setShowIndex1, showItems }) => {
  const handleClick = () => {
    setShowIndex1();
  };
  return (
    <div className="w-full text-2xl bg-[rgb(45,45,45)] py-6 mt-4 ">
      <div
        onClick={handleClick}
        className="flex px-6 items-center justify-between cursor-pointer"
      >
        <h3 className="font-semibold">{ele.title}</h3>
        {showItems ? <RxCross2 size={40} /> : <CiSquarePlus size={40} />}
      </div>
      {showItems && (
        <div>
          <div className="h-0.5 mt-5 w-full bg-black"></div>
          <p className="px-6 mt-8 ">{ele.ans}</p>
        </div>
      )}
    </div>
  );
};

export default FreqItem;

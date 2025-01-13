import React, { useState } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/LangConst";
import useGptSearch from "../CustomHooks/useGptSearch";

const GptSearchBar = () => {
  const selectedLang = useSelector((state) => state.config.language);
  const {inputValue,setInputValue,getResponseForGivenPrompt} = useGptSearch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  

  return (
    <div>
      <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form
          className="w-full md:w-1/2 bg-black rounded-lg grid grid-cols-12"
          onSubmit={getResponseForGivenPrompt}
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="p-4 m-4 col-span-9"
            placeholder={lang[selectedLang].gptSearchPlaceholder}
          />
          <button
            type="submit"
            className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          >
            {lang[selectedLang].search}
          </button>
        </form>
      </div>
    
    </div>
  );
};

export default GptSearchBar;

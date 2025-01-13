import React, { useState } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDispatch, useSelector } from "react-redux";
import { addGptResponse,toggleGptInputButton} from "../utils/GptSlice";

const API_KEY = import.meta.env.VITE_GIPHY_GEMINI_API_KEY;

const useGptSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI(API_KEY);

  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await response.json();
      return json.results || [];
    } catch (error) {
      console.error(`Error fetching movie "${movie}":`, error);
      return []; // Return an empty array in case of an error
    }
  };

  const getResponseForGivenPrompt = async (e) => {
    dispatch(toggleGptInputButton());
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Act as a Movie Recommendation system and suggest some movies for the query: "${inputValue}". Only give me names of 5 movies, comma-separated like this example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.`;

      const result = await model.generateContent([prompt ]);
      const moviesList = result?.response?.text()?.split(",").map((movie) => movie.trim());

      if (moviesList && moviesList.length > 0) {
        setInputValue("");
        const promiseArray = moviesList.map((movie) => searchMovieTMDB(movie));
        const moviesResult = await Promise.all(promiseArray);
        dispatch(addGptResponse({ moviesList, moviesResult }));
        if(moviesResult){
            dispatch(toggleGptInputButton());
        }
      } else {
        console.error("Unexpected API response:", result);
        alert("Failed to fetch movie recommendations.");
      }
    } catch (error) {
      console.error("Error generating content:", error);
      alert("Something went wrong. Please try again.");
    } 
  };

  return { inputValue, setInputValue, getResponseForGivenPrompt };
};

export default useGptSearch;

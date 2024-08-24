import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";

const Search = ({ foodData, setFoodData, setIsLoading }) => {
  const [query, setQuery] = useState("pizza");

  const url = "https://api.spoonacular.com/recipes/complexSearch?query=";
  const api_key = "a32c8e13c8b34c0dbe6d0f8221cea14d";

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`${url}?query=${query}&apiKey=${api_key}`);
      const data = await result.json();
      console.log(`FoodData: `, data.results);
      setFoodData(data.results);
      const data1 = [
        {
          id: 680975,
          title: "BLT Pizza",
          image: "https://img.spoonacular.com/recipes/680975-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 716300,
          title: "Plantain Pizza",
          image: "https://img.spoonacular.com/recipes/716300-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 659358,
          title: "Sausage Calzone",
          image: "https://img.spoonacular.com/recipes/659358-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 654523,
          title: "Paneer & Fig Pizza",
          image: "https://img.spoonacular.com/recipes/654523-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 655847,
          title: "Pesto Veggie Pizza",
          image: "https://img.spoonacular.com/recipes/655847-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 651956,
          title: "Mini eggplant pizza",
          image: "https://img.spoonacular.com/recipes/651956-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 665769,
          title: "Zucchini Pizza Boats",
          image: "https://img.spoonacular.com/recipes/665769-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 662264,
          title: "summer vegetable pizza",
          image: "https://img.spoonacular.com/recipes/662264-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 636593,
          title: "Butternut Squash Pizza",
          image: "https://img.spoonacular.com/recipes/636593-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 661640,
          title: "Stilton Balsamic Pizza",
          image: "https://img.spoonacular.com/recipes/661640-312x231.jpg",
          imageType: "jpg",
        },
      ];
      // setFoodData(data1);
    }
    fetchData();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      {/* {query} <br /> */}
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for a recipe..."
      />
    </div>
  );
};

export default Search;

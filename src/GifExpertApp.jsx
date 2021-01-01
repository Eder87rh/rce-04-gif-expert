import React from "react";
import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One punch",
    "Samurai X",
    "Dragon ball",
  ]);

  /* const handleAdd = (el) => {
    setCategories([...categories, el]);
  }; */

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;

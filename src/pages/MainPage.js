import { MainPageTemplate } from "../components/templates/MainPageTemplate";
import { useState, useEffect } from "react";
import axios from "axios";

export const MainPage = () => {
  const [recipes, setRecipes] = useState([]);
  const handleGetAllRecipies = async () => {
    try {
      const result = await axios.get(
        `https://exercise.cngroup.dk/api/recipes/`
      );
      const cards = result.data;
      setRecipes(cards);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetAllRecipies();
  }, [recipes.length]);

  return <MainPageTemplate recipes={recipes} />;
};

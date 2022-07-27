import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipePageTemplate } from "../components/templates/RecipePageTemplate";
import { useNavigate } from "react-router-dom";
import openNotificationWithIcon from "../components/atoms/notifiaction";

export const RecipePage = () => {
  const [recipe, setRecipe] = useState({});

  const { recipeId } = useParams();

  const navigate = useNavigate();
  const handleGoHome = () => navigate(`/`);

  const handleGetRecipe = async () => {
    try {
      const result = await axios.get(
        `https://exercise.cngroup.dk/api/recipes/${recipeId}`
      );
      const card = result.data;
      setRecipe(card);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteRecipe = async () => {
    try {
      await axios.delete(
        `https://exercise.cngroup.dk/api/recipes/${recipe._id}`
      );
      openNotificationWithIcon(
        "success",
        "Deleted",
        "Recipe deleted successfully"
      );
      handleGoHome();
    } catch (error) {
      console.log(error);
      openNotificationWithIcon("error", "Error", "Recipe not deleted");
    }
  };

  useEffect(() => {
    handleGetRecipe();
  }, [recipeId]);
  return (
    <RecipePageTemplate
      handleDeleteRecipe={handleDeleteRecipe}
      recipe={recipe}
    />
  );
};

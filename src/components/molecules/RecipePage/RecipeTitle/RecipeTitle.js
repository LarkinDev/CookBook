import { RecipeTitleWrapper, ButtonsWrapper } from "./styles";
import RecipeName from "../../../atoms/RecipePage/RecipeName";
import UpdateButton from "../../../atoms/RecipePage/UpdateButton";
import DeleteButton from "../../../atoms/RecipePage/DeleteButton";
import { useNavigate } from "react-router-dom";

const RecipeTitle = ({ handleDeleteRecipe, recipeName, recipeId, recipe }) => {
  const navigate = useNavigate();
  const handleGoEditForm = () =>
    navigate(`/recipe/edit/${recipeId}`, { state: recipe });
  return (
    <>
      <RecipeTitleWrapper>
        <RecipeName>{recipeName}</RecipeName>
        <ButtonsWrapper>
          <UpdateButton style={{margin:"0px 100px 0px 0px"}} onClick={handleGoEditForm}>Update</UpdateButton>
          <DeleteButton style={{margin:"0px 0px 0px 50px"}}onClick={handleDeleteRecipe}>Delete</DeleteButton>
        </ButtonsWrapper>
      </RecipeTitleWrapper>
    </>
  );
};

export default RecipeTitle;

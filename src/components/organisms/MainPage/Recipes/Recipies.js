import { Recipe } from "../../../molecules/MainPage/Recipe/Recipe";
import { useNavigate } from "react-router-dom";

const Recipes = ({ recipes }) => {
  const navigate = useNavigate();
  const handleGoPageDetails = (recipeId) => navigate(`/recipe/${recipeId}`);
  if (recipes.length > 0) {
    return (
      <>
        {recipes.map(({ _id, title, slug }) => (
          <Recipe
            key={_id}
            id={_id}
            title={title}
            slug={slug}
            handleGoPageDetails={() => handleGoPageDetails(slug)}
          />
        ))}
        ;
      </>
    );
  } else {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    );
  }
};
export default Recipes;

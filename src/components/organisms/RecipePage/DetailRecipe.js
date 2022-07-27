import RecipeTitle from "../../molecules/RecipePage/RecipeTitle/RecipeTitle";
import RecipeBody from "../../molecules/RecipePage/RecipeBody/RecipeBody";

const DetailRecipe = ({ handleDeleteRecipe, recipe }) => {
  const {
    ingredients,
    title,
    directions,
    preparationTime,
    lastModifiedDate,
    servingCount,
    slug,
  } = recipe;
  return (
    <>
      <RecipeTitle
        handleDeleteRecipe={handleDeleteRecipe}
        recipeName={title}
        recipeId={slug}
        recipe = {recipe}
      />
      <RecipeBody
        ingredients={ingredients}
        preparationTime={preparationTime }
        directions={directions}
        lastModifiedDate={lastModifiedDate}
        servingCount={servingCount}
      />
    </>
  );
};

export default DetailRecipe;

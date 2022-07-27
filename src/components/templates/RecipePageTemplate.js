import "antd/dist/antd.css";
import DetailRecipe from "../organisms/RecipePage/DetailRecipe";
import Header from "../organisms/MainPage/Header/Header";

export const RecipePageTemplate = ({
  handleDeleteRecipe,
  recipe,
}) => {
  return (
    <>
      <Header />
      <DetailRecipe
        handleDeleteRecipe={handleDeleteRecipe}
        recipe={recipe}
      />
    </>
  );
};

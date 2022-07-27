import { ButtonWrapper, RecipesCountWrapper } from "./styles";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Label from "../../../atoms/MainPage/Label";

const SubHeader = ({ recipesCount }) => {
  const navigate = useNavigate();
  const handleGoAddForm = () => navigate(`/recipe/add`);
  return (
    <ButtonWrapper>
      <RecipesCountWrapper>
        <Label> Recipies count: {recipesCount}</Label>
      </RecipesCountWrapper>

      <Button onClick={handleGoAddForm} size="large" type="primary">
        Add Recipe
      </Button>
    </ButtonWrapper>
  );
};

export default SubHeader;

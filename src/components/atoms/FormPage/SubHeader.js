import { Button } from "antd";
import { SubHeaderWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export const SubHeader = ({ isValid }) => {
  const navigate = useNavigate();
  const handleGoRecipe = () => navigate(-1);
  return (
    <SubHeaderWrapper>
      <Button
        style={{ margin: "20px 20px 20px 0px" }}
        disabled={!isValid}
        htmlType="submit"
        type="primary"
      >
        Save
      </Button>
      <Button
        style={{ margin: "20px 0px 20px 20px" }}
        type="danger"
        onClick={handleGoRecipe}
      >
        Cancel
      </Button>
    </SubHeaderWrapper>
  );
};

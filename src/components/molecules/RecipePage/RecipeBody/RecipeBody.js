import { RecipeBodyWrapper, RecipeTextWrapper } from "./styles";
import RecipeHours from "../../../atoms/RecipePage/RecipeHours";
import RecipeLMD from "../../../atoms/RecipePage/RecipeLMD";
import RecipeServings from "../../../atoms/RecipePage/RecipeServings";
import "antd/dist/antd.css";
import { List, Typography } from "antd";
import "./styles.css";
import Label from "../../../atoms/MainPage/Label";
import { isNaN } from "formik";

const { Title, Paragraph } = Typography;

const RecipeBody = ({
  ingredients,
  preparationTime,
  directions,
  lastModifiedDate,
  servingCount,
}) => {
  let body =
    ingredients?.length > 0 ? (
      <List
        itemLayout="horizontal"
        dataSource={ingredients}
        bordered="true"
        renderItem={(item) => (
          <List.Item className="ingr" bordered="true">
            <Title level={5}>
              {item.amount} {item.amountUnit} {item.name}
            </Title>
          </List.Item>
        )}
      />
    ) : (
      <Paragraph className="nf">Ingredients not found</Paragraph>
    );
  let servC =
    servingCount === undefined || servingCount === ""
      ? "Not Found"
      : servingCount;
  let descr =
    directions === undefined || directions === "" ? "Not Found" : directions;

  let time =
    preparationTime === undefined || isNaN(preparationTime)
      ? "Not Found"
      : (preparationTime / 60).toFixed(1) + " h."
  const date = lastModifiedDate?.split("T")[0];
  return (
    <>
      <RecipeHours>
        Preparation time <span>►</span> {time}
      </RecipeHours>
      <RecipeServings>Servings: {servC}</RecipeServings>
      <RecipeBodyWrapper>
        {body}
        <RecipeTextWrapper>
          <Label>Directions</Label>
          <Paragraph>{descr}</Paragraph>
        </RecipeTextWrapper>
      </RecipeBodyWrapper>
      <RecipeLMD>Last modified date: {date}</RecipeLMD>
    </>
  );
};

export default RecipeBody;

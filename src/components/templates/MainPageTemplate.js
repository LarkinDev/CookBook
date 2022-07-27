import Header from "../organisms/MainPage/Header/Header";
import Body from "../organisms/MainPage/Body/Body";
import BodyWrapper from "../organisms/MainPage/Body/BodyWrapper";
import SubHeader from "../organisms/MainPage/Header/SubHeader";

export const MainPageTemplate = ({ recipes }) => {
  let recipesCount = recipes?.length;
  return (
    <>
      <Header recipes={recipes} />
      <SubHeader recipesCount={recipesCount} />
      <BodyWrapper>
        <Body recipes={recipes} />
      </BodyWrapper>
    </>
  );
};

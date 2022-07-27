import Header from "../organisms/MainPage/Header/Header";
import Form from "../organisms/EditFormPage/EditForm";

const EditFormPageTemplate = ({ recipe, handleEditRecipe }) => {
  return (
    <>
      <Header />
      <Form handleEditRecipe={handleEditRecipe} recipe={recipe} />
    </>
  );
};

export default EditFormPageTemplate;

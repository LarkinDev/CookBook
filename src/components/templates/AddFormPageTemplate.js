import Header from "../organisms/MainPage/Header/Header";
import AddForm from "../organisms/AddFormPage/AddForm";

export const AddFormPageTemplate = ({ formData, handleAddRecipe }) => {
  return (
    <>
      <Header />
      <AddForm handleAddRecipe = {handleAddRecipe} formData={formData} />
    </>
  );
};

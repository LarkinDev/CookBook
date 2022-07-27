import { AddFormPageTemplate } from "../components/templates/AddFormPageTemplate";
import axios from "axios";
import CustomNotification from "../components/atoms/notifiaction";

export const AddFormPage = () => {
  const formData = {
    title: "",
    servingCount: "",
    preparationTime: "",
    directions: "",
    ingredients: [],
  };
  const handleAddRecipe = async (data) => {
    try {
      const res = await axios.post(
        `https://exercise.cngroup.dk/api/recipes`,
        data
      );
      CustomNotification("success", "Added", "Recipe added");
      return res.data;
    } catch (error) {
      CustomNotification(
        "error",
        "Error",
        "Recipe not deleted" + error.message
      );
      console.log(error.message);
      return false;
    }
  };

  return (
    <AddFormPageTemplate
      handleAddRecipe={handleAddRecipe}
      formData={formData}
    />
  );
};

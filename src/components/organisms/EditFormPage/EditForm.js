import { Formik } from "formik";

import formValidation from "../../atoms/FormPage/validation";
import { useNavigate } from "react-router-dom";
import { FormsEl } from "../../molecules/Form/Form";

const Form = ({ recipe, handleEditRecipe }) => {
  const navigate = useNavigate();
  const handleGoToRecipe = (slug) => navigate(`/recipe/${slug}`);
  const formData = {
    title: recipe.title,
    servingCount: recipe.servingCount,
    preparationTime: recipe.preparationTime,
    directions: recipe.directions,
    ingredients: recipe.ingredients,
  };
  return (
    <Formik
      initialValues={formData}
      onSubmit={async (data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const res = await handleEditRecipe(data);
        setSubmitting(false);
        if (res) {
          resetForm();
          handleGoToRecipe(res.slug);
        }
      }}
      validationSchema={formValidation}
    >
      {FormsEl}
    </Formik>
  );
};

export default Form;

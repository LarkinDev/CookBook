import { Formik } from "formik";

import formValidation from "../../atoms/FormPage/validation";

import { useNavigate } from "react-router-dom";
import { FormsEl } from "../../molecules/Form/Form";

const AddForm = ({ formData, handleAddRecipe }) => {
  const navigate = useNavigate();
  const handleGoToRecipe = (slug) => navigate(`/recipe/${slug}`);
  return (
    <Formik
      initialValues={formData}
      onSubmit={async (data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const res = await handleAddRecipe(data);
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

export default AddForm;
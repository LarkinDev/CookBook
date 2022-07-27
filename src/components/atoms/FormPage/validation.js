import * as Yup from "yup";

const formValidation = () =>
  Yup.object({
    title: Yup.string().required("Name is required!!!"),
    servingCount: Yup.number()
      .positive("Number of portions must be positive!!!"),
    amount: Yup.number()
      .positive("Amount must be be positive!!!"),
    preparationTime: Yup.number()
      .positive("Preparation time must be be positive!!!"),
    ingredients: Yup.array().of(
      Yup.object().shape({
        amount: Yup.number()
          .positive("Amount must be positive!!!"),
        name: Yup.string().required("Ingredients name is required!!!"),
      })
    ),
  });

export default formValidation;

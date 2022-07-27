import { Input } from "antd";
import { Field, ErrorMessage } from "formik";
import Label from "./Label";
import "./style.css"

const { TextArea } = Input;

const CustomInput = ({ name, type, label, placeholder, rows }) => {
  return (
    <>
      {label ? <Label>{label}</Label> : ""}
      <Field
        className="field"
        type={type}
        name={name}
        as={type === "textarea" ? TextArea : Input}
        placeholder={placeholder}
        rows={rows}
      />
      <ErrorMessage name={name} component="div" className="err" />
    </>
  );
};

export default CustomInput;

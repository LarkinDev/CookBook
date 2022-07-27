import CustomInput from "../../atoms/FormPage/CustomInput";
import { FormWrapper, IngWrapper } from "./styles";

import Label from "../../atoms/FormPage/Label";
import { Button, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { FieldArray } from "formik";
import { SubHeader } from "../../atoms/FormPage/SubHeader";
import "./Form.css";

export const FormsEl = ({ values, handleSubmit, isValid }) => (
  <form onSubmit={handleSubmit}>
    <SubHeader isValid={isValid} />
    <FormWrapper>
    <CustomInput label="Name" style={{margin:"20px"}} type="text" name="title" />
      <Row gutter={[16, 24]}>
        <Col className="gutter-row" span={4}>
          <CustomInput label="Servings" type="number" name="servingCount" />
          <CustomInput
            label="Preparation time (min)"
            type="number"
            name="preparationTime"
          />
        </Col>
        <Col className="gutter-row" span={9}>
          <Label>Ingredients</Label>
          <FieldArray name="ingredients">
            {({ remove, push }) => (
              <>
                {values.ingredients.length > 0 &&
                  values.ingredients.map((ing, index) => (
                    <div key={index}>
                      <Row className="rowIng" gutter={[1, 1]}>
                        <Col className="gutter-row" span={12}>
                          <CustomInput
                            type="text"
                            name={`ingredients.${index}.name`}
                            placeholder="Name"
                          />
                        </Col>
                        <Col span={5}>
                          <CustomInput
                            type="number"
                            name={`ingredients.${index}.amount`}
                            placeholder="Amount"
                          />
                        </Col>
                        <Col className="gutter-row" span={5}>
                          <CustomInput
                            type="text"
                            name={`ingredients.${index}.amountUnit`}
                            placeholder="Amount unit"
                          />
                        </Col>

                        <Col className="gutter-row" span={1}>
                          <Button
                            icon={<DeleteOutlined />}
                            onClick={() => remove(index)}
                            type="danger"
                            className="delIng"
                          />
                        </Col>
                      </Row>
                    </div>
                  ))}

                <IngWrapper>
                  <CustomInput
                    label="Ingredient name"
                    type="text"
                    name="ingName"
                  />
                  <CustomInput label="Amount" type="number" name="amount" />
                  <CustomInput
                    label="Amount unit"
                    type="text"
                    name="amountUnit"
                  />
                  <Button
                    disabled={
                      values.ingName === "" || values.ingName === undefined
                    }
                    type="button"
                    onClick={() =>
                      push({
                        name: values.ingName,
                        amount: values.amount,
                        amountUnit: values.amountUnit,
                      })
                    }
                    as={Button}
                    className="AddIng"
                  >
                    Add ingredient
                  </Button>
                </IngWrapper>
              </>
            )}
          </FieldArray>
        </Col>

        <Col className="gutter-row" span={11}>
          <CustomInput
            label="Description"
            type="textarea"
            rows="14"
            name="directions"
          />
        </Col>
      </Row>
    </FormWrapper>
  </form>
);

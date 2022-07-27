import "antd/dist/antd.css";
import { Col, Card } from "antd";
import pic from "../../../../images/food.jpg";

const { Meta } = Card;

export const Recipe = ({ id, title, handleGoPageDetails}) => {
  return (
    <Col className="gutter-row" span={6}>
      <Card
        hoverable
        style={{ width: 350 }}
        cover={<img alt="Food" src={pic} />}
        onClick={handleGoPageDetails}
      >
        <Meta title={title} />
      </Card>
    </Col>
  );
};

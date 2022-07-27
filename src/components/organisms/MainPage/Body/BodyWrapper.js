import { Row } from "antd";
import 'antd/dist/antd.css';


const BodyWrapper = ({ children }) => {
  return (
      <Row justify="space-around" gutter={[16, 16]} style={{ padding: "20px 0px 20px 45px" }}>
        {children}
      </Row>
  );
};

export default BodyWrapper;

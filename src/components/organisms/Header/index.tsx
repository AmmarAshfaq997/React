import { Layout, Row, Col, Input, Button, Badge, Avatar } from "antd";
import "./styles.css";
import {
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  AppstoreOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

const AntHeader: React.FC = (): JSX.Element => (
  <Header className="site-layout-background">
    <Row justify="space-between">
      <Col span={6}>
        <Input
          size="large"
          placeholder="Type here to search"
          prefix={<SearchOutlined />}
          width="200px"
        />
      </Col>
      <Col span={18}>
        <div className="header-style">
          <Button type="text">+Add</Button>
          <Button type="text">
            <Badge count={5} status="success">
              <BellOutlined />
            </Badge>
          </Button>
          <Button type="text">
            <Badge count={5} status="success">
              <MessageOutlined />
            </Badge>
          </Button>
          <Button type="text">
            <Badge count={5} status="success">
              <AppstoreOutlined />
            </Badge>
          </Button>
          <Button type="text">
            <div>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <CaretDownOutlined />
            </div>
          </Button>
        </div>
      </Col>
    </Row>
  </Header>
);

export default AntHeader;

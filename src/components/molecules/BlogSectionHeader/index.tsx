import { Col, Row } from "antd";
import { Typography, Button } from "../../atoms";
import { FilterOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Logo = styled.div`
  height: 70px;
  width: 70px;
  border: 2px solid #000;
  border-radius: 20;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  display: flex;
  background: #fff;
`;

const BlogRoot = styled(Row)`
  padding: 10px;
`;
const BlogSectionChild1 = styled.div`
  display: flex;
  align-items: center;
`;

const BlogSectionChild2 = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const BlogSectionHeader: React.FC = (): JSX.Element => (
  <BlogRoot>
    <Col span={12}>
      <BlogSectionChild1>
        <Logo>
          <FilterOutlined style={{ fontSize: 40 }} />
        </Logo>
        <div>
          <Typography texttype="title" direction="block">
            All Blog Posts
          </Typography>
          <Typography texttype="subTitle" direction="block">
            Qatar Development Bank
          </Typography>
        </div>
      </BlogSectionChild1>
    </Col>
    <Col span={12}>
      <BlogSectionChild2>
        <Button icon={<FilterOutlined />}>Filter/Sort by</Button>
      </BlogSectionChild2>
    </Col>
  </BlogRoot>
);

export default BlogSectionHeader;

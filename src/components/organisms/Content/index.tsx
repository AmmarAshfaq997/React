import { Layout } from "antd";
const { Content } = Layout;

type Props = {
  children?: React.ReactNode;
};

const AntContent: React.FC<Props> = ({ children }) => (
  <Content>{children}</Content>
);

export default AntContent;

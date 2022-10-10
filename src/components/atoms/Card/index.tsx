import { Card, CardProps } from "antd";
import styled from "styled-components";

export interface Props extends CardProps {
  margin?: number;
  width?: string;
}

const StyledCard = styled((props: Props) => <Card {...props} />)`
  margin: ${(props) => props?.margin || 0}px;
`;

export default StyledCard;

import { Typography } from "antd";
import { TextProps } from "antd/lib/typography/Text";
import styled from "styled-components";

const { Text } = Typography;

export interface Props extends TextProps {
  texttype?: string;
  margin?: string;
  direction?: string;
}

const StyledText = styled((props: Props) => <Text {...props} />)`
  color: ${(props) =>
    props.texttype === "title"
      ? props.theme.colors.title
      : props.texttype === "subTitle"
      ? props.theme.colors.subTitle
      : props.texttype === "highlight"
      ? props.theme.colors.highlight
      : props.theme.colors.subTitle};
  font-size: ${(props) =>
    props.texttype === "title"
      ? props.theme.font.size.title
      : props.texttype === "subTitle"
      ? props.theme.font.size.subTitle
      : props.theme.font.size.subTitle};

  font-weight: ${(props) =>
    props.texttype === "title"
      ? props.theme.font.weight.title
      : props.texttype === "subTitle"
      ? props.theme.font.weight.subTitle
      : props.theme.font.weight.subTitle};

  margin: ${(props) => props.margin};
  display: ${(props) => props.direction || "inline"};
`;

export default StyledText;

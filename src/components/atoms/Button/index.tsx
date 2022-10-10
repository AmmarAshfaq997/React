import { Button, ButtonProps } from "antd";
import styled from "styled-components";

export interface Props extends ButtonProps {}

const StyledButton = styled((props: Props) => <Button {...props} />)``;

export default StyledButton;

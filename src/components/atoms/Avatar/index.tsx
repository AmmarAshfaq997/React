import { Avatar, AvatarProps } from "antd";
import styled from "styled-components";

export interface Props extends AvatarProps {}

const StyledAvatar = styled((props: Props) => <Avatar {...props} />)``;

export default StyledAvatar;

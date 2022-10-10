import { List } from "antd";
import { ListItemProps } from "antd/lib/list";
import styled from "styled-components";

const { Item } = List;

export interface Props extends ListItemProps {}

const StyledListItem = styled((props: Props) => <Item {...props} />)``;

export default StyledListItem;

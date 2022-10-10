import { List, ListProps } from "antd";
import styled from "styled-components";
import { ListItemTypeProps } from "antd/lib/list/Item";

export interface Props extends ListProps<ListItemTypeProps> {}

const StyledList = styled((props: Props) => <List {...props} />)``;

export default StyledList;

import { List } from "antd";
import { ListItemMetaProps } from "antd/lib/list";
import styled from "styled-components";

const { Item } = List;

export interface Props extends ListItemMetaProps {}

const StyledListItemMeta = styled((props: Props) => <Item.Meta {...props} />)``;

export default StyledListItemMeta;

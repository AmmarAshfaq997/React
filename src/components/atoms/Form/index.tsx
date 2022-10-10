import { Form, FormProps } from "antd";
import styled from "styled-components";

export interface Props extends FormProps {}

const StyledForm = styled((props: any) => <Form {...props} />)``;

export default StyledForm;

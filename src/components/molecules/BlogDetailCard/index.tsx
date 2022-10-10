import React from "react";
import styled from "styled-components";
import { Typography, Card } from "../../atoms";

type Props = {
  data: {
    title: string;
    body: string;
  };
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const BlogDetailCard: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data ? (
        <Card title={"Blog Detail"} bordered={false} margin={20} width={"100%"}>
          <>
            <Typography direction="block">{data.title}</Typography>
            <Typography direction="block">{data.body}</Typography>
          </>
        </Card>
      ) : null}
    </Container>
  );
};

export default BlogDetailCard;

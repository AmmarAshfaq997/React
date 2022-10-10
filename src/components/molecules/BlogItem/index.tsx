import React, { useMemo } from "react";
import PostForm from "../PostForm";
import { BlogItemType } from "../../../types";
import { Button, List, ListItem, ListItemMeta } from "../../atoms";
import styled from "styled-components";

const BlogItemCard = styled.div`
  display: flex;
`;

const BlogItem: React.FC<BlogItemType> = ({
  data: dateList,
  onClick,
  onEditClick,
  itemIndex,
  onSubmitForm,
}) => {
  const dataPrint = useMemo(
    () =>
      (dateList?.ids || []).map((item: any) => ({
        avatar: "https://joeschmoe.io/api/v1/random",
        ...dateList.entities[item],
      })),
    [dateList]
  );

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
        style: { display: "flex", justifyContent: "center" },
      }}
      dataSource={dataPrint || []}
      renderItem={(item: any) => (
        <ListItem
          key={item.title}
          actions={[
            <Button type="text" onClick={() => onEditClick?.(item)}>
              Edit
            </Button>,
            <Button type="text">Delete</Button>,
          ]}
        >
          {item.id === itemIndex.id ? (
            <PostForm onSubmitForm={onSubmitForm} item={itemIndex} />
          ) : (
            <BlogItemCard
              onClick={() => {
                onClick?.(item);
              }}
            >
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <ListItemMeta
                title={item.title}
                description={item.body}
                style={{ marginLeft: 20 }}
              />
            </BlogItemCard>
          )}
        </ListItem>
      )}
    />
  );
};

export default BlogItem;

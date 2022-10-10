import React, { useState, useMemo } from "react";
import BlogItem from "../BlogItem";
import { Card } from "../../atoms";
import { tabListNoTitle } from "../../../constant";
import { BlogItemType } from "../../../types";

const BlogCard: React.FC<BlogItemType> = ({
  data,
  onClick,
  onEditClick,
  itemIndex,
  onSubmitForm,
}) => {
  const [activeTabKey2, setActiveTabKey2] = useState<string>("all");
  const contentListNoTitle: Record<string, React.ReactNode> = useMemo(
    () => ({
      all: (
        <BlogItem
          data={data}
          onClick={onClick}
          onEditClick={onEditClick}
          itemIndex={itemIndex}
          onSubmitForm={onSubmitForm}
        />
      ),
      latest: <p>Latest Post</p>,
      archived: <p>Archived Post</p>,
    }),
    [itemIndex, data]
  );

  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <Card
      margin={10}
      tabList={tabListNoTitle}
      activeTabKey={activeTabKey2}
      onTabChange={(key) => {
        onTab2Change(key);
      }}
    >
      {contentListNoTitle[activeTabKey2]}
    </Card>
  );
};

export default BlogCard;

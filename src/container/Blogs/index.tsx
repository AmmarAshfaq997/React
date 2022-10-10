import { Suspense } from "react";
import { Skeleton } from "antd";
import { Content, Header, Sider } from "../../components/organisms";
import { SectionHeader, SectionBlogCard } from "../../components/molecules";
import { Empty } from "antd";
import { Layout } from "antd";
import useBlog from "./useBlog";
function Blog() {
  const {
    onSeeDetail,
    onEditClick,
    editIndex,
    onSubmitForm,
    dataPosts,
    isLoadingPosts,
    dataUser,
    isLoadingUser,
  } = useBlog();

  return (
    <Layout>
      <Suspense fallback={isLoadingUser && <Skeleton />}>
        <Sider
          data={dataUser?.entities[dataUser.ids[0]] || null}
          defaultSelectedKeys={["2"]}
          defaultOpenKeys={["sub2"]}
        />
      </Suspense>
      <Layout>
        <Header />
        <Suspense fallback={isLoadingPosts && <Empty />}>
          <Content>
            <SectionHeader />
            <SectionBlogCard
              data={dataPosts}
              onClick={onSeeDetail}
              onEditClick={onEditClick}
              itemIndex={editIndex}
              onSubmitForm={onSubmitForm}
            />
          </Content>
        </Suspense>
      </Layout>
    </Layout>
  );
}

export default Blog;

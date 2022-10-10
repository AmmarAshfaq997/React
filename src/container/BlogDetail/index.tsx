import { Suspense } from "react";
import { Content, Header, Sider } from "../../components/organisms";
import { Empty, Layout } from "antd";
import useBlogDetail from "./useBlogDetail";
import { BlogDetailCard } from "../../components/molecules";
import { Skeleton } from "antd";

function BlogDetail() {
  const {
    location,
    data: dataUser,
    isLoading: isLoadingUser,
  } = useBlogDetail();

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
        <Suspense fallback={isLoadingUser && <Empty />}>
          <Content>
            <BlogDetailCard data={location.state.data} />
          </Content>
        </Suspense>
      </Layout>
    </Layout>
  );
}

export default BlogDetail;

import { Suspense } from "react";
import { Layout, Empty, Skeleton } from "antd";
import useDashboard from "./useDashboard";

import { Content, Header, Sider } from "../../components/organisms";
import { DashboardProfileCard } from "../../components/molecules";

function Dashboard() {
  const { data: dataUser, isLoading: isLoadingUser } = useDashboard();

  return (
    <Layout>
      <Suspense fallback={isLoadingUser && <Skeleton />}>
        <Sider
          data={dataUser?.entities[dataUser.ids[0]] || null}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
        />
      </Suspense>
      <Layout>
        <Header />
        <Content>
          <Suspense fallback={isLoadingUser && <Empty />}>
            <DashboardProfileCard
              data={dataUser?.entities[dataUser.ids[0]] || null}
            />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;

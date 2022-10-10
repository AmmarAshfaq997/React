import React from "react";
import { Layout, Menu } from "antd";
import "./Styles.css";
import {
  MenuOutlined,
  RiseOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  InfoCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import Profile from "../../molecules/Profile";
const items: MenuItem[] = [
  getItem("Dashboards", "sub1", null, [
    getItem(
      "Overview",
      "1",
      <Link to="/">
        <RiseOutlined />
      </Link>
    ),
    getItem(
      "Calender",
      "2",
      <Link to="/">
        <CalendarOutlined />
      </Link>
    ),
    getItem(
      "Schedule Actions",
      "3",
      <Link to="/">
        <ScheduleOutlined />
      </Link>
    ),
    getItem(
      "Live Actions",
      "4",
      <Link to="/">
        <BellOutlined />
      </Link>
    ),
  ]),

  getItem("Blogs", "sub2", null, [
    getItem(
      "All",
      "5",
      <Link to="/blogs">
        <RiseOutlined />
      </Link>
    ),
    getItem(
      "Latest",
      "6",
      <Link to="/blogs">
        <InfoCircleOutlined />
      </Link>
    ),
    getItem(
      "Archived",
      "7",
      <Link to="/blogs">
        <CalendarOutlined />
      </Link>
    ),
  ]),
  getItem("Documentation", "sub3", null, []),
  getItem("Reports", "sub4", null, []),
  getItem("NEED HELP?", "sub5", null, []),
];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
type MenuItem = Required<MenuProps>["items"][number];

const { Sider } = Layout;
type UserProfile = {
  name: string;
  username: string;
};

export type UserProfileData = {
  data: UserProfile;
};
const AntSider: React.FC<any> = (props): JSX.Element => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onClick: MenuProps["onClick"] = (e) => {};

  return (
    <Sider
      // breakpoint="lg"
      theme="light"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      collapsed={collapsed}
    >
      <div className="sideheader">
        <img src={require("../../../assets/images/logo.png")} width={90} />
        <MenuOutlined
          color="#fff"
          style={{ fontSize: "16px", color: "#fff" }}
        />
      </div>
      <Profile data={props.data} />
      <Menu
        defaultSelectedKeys={props?.defaultSelectedKeys}
        defaultOpenKeys={props.defaultOpenKeys}
        mode="inline"
        theme="light"
        onClick={onClick}
        items={items}
      />
    </Sider>
  );
};

export default AntSider;

import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";

function SideMenu() {
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/",
          },
        ]}
      ></Menu>
      <div className="sidebar-div">
        <button className="sidebar-button">+</button>
        <h4>New assignment</h4>
        <p>Select from predefined questions to have a quick turnaround</p>
        <button className="sidebar-button1">Create new Assignment</button>
      </div>
    </div>
  );
}
export default SideMenu;

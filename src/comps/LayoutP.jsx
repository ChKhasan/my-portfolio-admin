import React, { useState } from "react";
import { Dropdown, Layout, Menu, Select } from "antd";
import "../style/adminPanel.css";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { TOKEN } from "../const/Api";
import PersonIcon from "@mui/icons-material/Person";
const logOut = () => {
  localStorage.removeItem(TOKEN);
  window.location.href = "/";
};
const menu = (
  <Menu
    items={[
      {
        label: <Button onClick={logOut}>Log out</Button>,
      },
    ]}
  />
);

const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const LayoutP = ({ children }) => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <div className="background"></div>

      <Layout>
        <div
          style={{
            width: collapsed ? "80px" : "200px",
            transition: "color 0.3s",
          }}
        ></div>
        <div className="position-fixed container-fluid"></div>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 10,
            theme: "light",
            maxWidth: "224px",
            width: "224px",
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            style={{ background: "white", height: "72px", paddingLeft: "24px" }}
            defaultSelectedKeys={["1"]}
            className="d-flex justify-content-start align-items-center logo_box"
          >
            <img
              src="./Images/Group 42678.png"
              alt=""
              style={{ marginRight: "10px" }}
            />
            <img src="./Images/Group 42679.png" alt="" />
          </Menu>
          <div className="departments">
            <p>Asosiy</p>
          </div>
          <Menu
            mode="inline"
            className="menu_category"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" icon={<PersonIcon />}>
              <Link to="/students">O'qituvchilar</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<PersonIcon />}>
              <Link to="/students">O'qituvchilar</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <div className="container-fluid w-100 site-layout-background header_leader position-fixed">
            <div className="container header_fidex" style={{ marginLeft: "0" }}>
              <div
                style={{ height: "70px", zIndex: "10", background: "white" }}
                className="d-flex layout-header justify-content-between align-items-center  "
              >
                <h3 className="title_layout">O’qituvchilar</h3>
                <div>
                  <Select defaultValue="en" style={{}} onChange={handleChange}>
                    <Option value="en">EN</Option>
                    <Option value="rus">RUS</Option>
                    <Option value="uzb">UZB</Option>
                  </Select>
                  <Dropdown
                    className="werwerert"
                    overlay={menu}
                    placement="bottom"
                  >
                    <Button>
                      {" "}
                      <Stack direction="row" spacing={2}>
                        <Avatar
                          alt="Remy Sharp"
                          src="./Images/Image Profile.png"
                        />
                      </Stack>
                    </Button>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
          {/* <Header className="site-layout-background " style={{ padding: 0 }}>
            <div className="d-flex layout-header justify-content-between align-items-center  ">
              <h3 className="title_layout">O’qituvchilar</h3>
              <div >
                <Select defaultValue="en" style={{}} onChange={handleChange}>
                  <Option value="en">EN</Option>
                  <Option value="rus">RUS</Option>
                  <Option value="uzb">UZB</Option>
                </Select>
                <Dropdown
                  className="werwerert"
                  overlay={menu}
                  placement="bottom"
                >
                  <Button>
                    {" "}
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="Remy Sharp"
                        src="./Images/Image Profile.png"
                      />
                    </Stack>
                  </Button>
                </Dropdown>
              </div>
            </div>
          </Header> */}
          <div className="prototip"></div>
          {children}
          {/* <Users  /> */}
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutP;

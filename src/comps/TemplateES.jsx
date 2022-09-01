import { Table, Button, Form, Space, Skeleton, Select } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import {
  EllipsisOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { getData } from "../server/common";
const { Option } = Select;
const data = [
  {
    id: 1,
    rasm: "",
    fullname: "Dilshoda Alijonova",
    hudud: "Farg'ona",
    til: "",
    number: "99 876 76 78",
    holat: "Faol",
    action: "",
  },
  {
    id: 1,
    rasm: "",
    fullname: "Dilshoda Alijonova",
    hudud: "Farg'ona",
    til: "",
    number: "99 876 76 78",
    holat: "Faol",
    action: "",
  },
];
const Template = ({ types, columns_obj }) => {
  const [changeSty, setChangeSty] = useState(true);
  const [teacherData, setTeacherData] = useState([]);
  const [search, setSearch] = useState(false);
  const handleChange = (value) => {
    console.log(`selected ${value}`);

    if (value === "faol") {
      setChangeSty(true);
    } else {
      setChangeSty(false);
    }
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      sorter: (a, b) => a.age - b.age,
      align: "center",
    },
    {
      title: "RASM",
      dataIndex: "imgUrl",
      sorter: (a, b) => a.age - b.age,
      align: "center",
    },
    {
      title: "ISM FAMILIYA",
      dataIndex: "firstName",
      sorter: (a, b) => a.age - b.age,
      align: "center",
    },
    {
      title: "HUDUD",
      dataIndex: "address",
      sorter: (a, b) => a.age - b.age,
      align: "center",
    },

    {
      title: "TIL",
      dataIndex: "subject",
      sorter: (a, b) => a.age - b.age,
      align: "center",
    },
    {
      title: "TELEFON RAQAMI",
      dataIndex: "phoneNumber",
      sorter: (a, b) => a.age - b.age,
      align: "center",
    },

    {
      title: "HOLAT",
      dataIndex: "active",
      sorter: (a, b) => a.age - b.age,
      render: (_, tags) => (
        <Space size="middle">
          <div className={_ ? "active" : "noactive"}>
            {_ ? "active" : "no active"}
          </div>
        </Space>
        // <>
      ),
      align: "center",
    },
    {
      title: "HARAKAT ",
      key: "action",
      render: (_, record) => (
        <div className="d-flex justify-content-center">
          <EllipsisOutlined style={{ fontSize: "30px" }} />
        </div>
      ),
      align: "center",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelected(selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const [selected, setSelected] = useState([]);

  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onSearch = (value) => console.log(value);
  const getApiData = () => {
    setLoading(true);
  };

  useEffect(() => {
    axios
      .get("http://192.168.0.243:3000/teacher?page=1&limit=10")
      .then((res) => {
        setTeacherData(res.data.data.data);
        console.log(res.data.data.data);
      });
  }, []);

  return (
    <div className="content-body">
      <div className="content-title d-flex justify-content-between">
        <div>
          {search ? (
            <Input
              allowClear
              placeholder="Search"
              prefix={<SearchOutlined />}
              style={{
                width: 200,
                marginRight: "16px",
                borderRadius: "4px",
              }}
            />
          ) : (
            <Button
              onClick={() => setSearch(true)}
              style={{
                marginRight: "16px",
                borderRadius: "4px",
              }}
            >
              <SearchOutlined />
            </Button>
          )}

          <Select
            defaultValue="hammasi"
            style={{
              width: 111,
              borderRadius: "4px",
              // border: "1px solid transparent",
              border: "1px solid rgb(0 0 0 / 0.1)",
            }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="hammasi">Ustozlar</Option>
          </Select>
        </div>
        <div className="d-flex">
          <Button
            style={{
              borderRadius: "4px",
            }}
          >
            Excel
          </Button>
          <Button
            type="primary"
            className="d-flex align-items-center"
            style={{ marginLeft: "16px", borderRadius: "4px" }}
          >
            <PlusOutlined />
            <Link className="create_teacher_btn" to="/create_teacher">
              O'qituvchi qo'shish
            </Link>
          </Button>
        </div>
      </div>
      <Content
        className="site-layout-background table_bac"
        style={{
          margin: "24px 16px",
          minHeight: 280,
        }}
      >
        <div className="d-flex w-100 justify-content-between"></div>
        {loading ? (
          <Skeleton active />
        ) : (
          <Table
            className="mt-4"
            rowKey="_id"
            columns={columns}
            dataSource={teacherData}
          />
        )}
      </Content>
    </div>
  );
};

export default Template;

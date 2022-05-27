import { Table, Modal, Button, Form, Input, Space } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import {
  UserOutlined,
  PercentageOutlined,
  EditTwoTone,
} from "@ant-design/icons";
import { deleteData, getData, postData, putData } from "../server/common";

const Skills = () => {
  const [selected, setSelected] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [skillData, setSkillData] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Percent",
      dataIndex: "percent",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>{record.name}</a>
          <a onClick={() => editApiData(record)}>
            <EditTwoTone />
          </a>
        </Space>
      ),
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

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getApiData = () => {
    getData("skills").then((res) => setSkillData(res.data.data));
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    if (isEdit) {
      console.log("put", isEdit);
      putData(`skills/${isEdit._id}`, values).then(() => {
        getApiData();
      });
      setIsEdit(null);
    } else {
      console.log("post", isEdit);

      postData("skills", values).then(() => {
        getApiData();
      });
    }
    setIsModalVisible(false);
  };
  const deleteApiData = () => {
    selected.map((item) => deleteData(`skills/${item._id}`));
    getApiData();
  };
  useEffect(() => {
    getApiData();
  }, []);
  const editApiData = (e) => {
    form.setFieldsValue(e);
    setIsEdit(e);
    setIsModalVisible(true);
  };
  return (
    <div>
      <div className="content-body">
        <div className="content-title">
          <h3>Skills</h3>
        </div>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <div className="d-flex w-100 justify-content-between">
            <div className="col-6 d-flex justify-content-start">
              {selected.length > 0 && (
                <Button type="primary" danger onClick={deleteApiData}>
                  Delete
                </Button>
              )}
            </div>
            <div className="col-6 d-flex justify-content-end">
              <Button type="primary" onClick={showModal}>
                Add Skill
              </Button>
            </div>
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              // onOk={handleOk}
              onCancel={handleCancel}
              footer={[]}
            >
              <Form
                name="normal_login"
                form={form}
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Name"
                  />
                </Form.Item>
                <Form.Item
                  name="percent"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input
                    prefix={
                      <PercentageOutlined className="site-form-item-icon" />
                    }
                    placeholder="Percent"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Add
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </div>
          <Table
            className="mt-4"
            rowKey="_id"
            rowSelection={{
              type: "chekbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={skillData}
          />
        </Content>
      </div>
    </div>
  );
};

export default Skills;

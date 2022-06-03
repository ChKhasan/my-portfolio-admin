import { Table, Modal, Button, Form, Input, Checkbox, Space, Skeleton } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { getData, postData, deleteData, putData } from "../server/common";
import { EditTwoTone } from "@ant-design/icons";

const Experiences = () => {
  const columns = [
    {
      title: "Work Name",
      dataIndex: "work_name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Company Name",
      dataIndex: "company_name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
    },
    {
      title: "End Date",
      dataIndex: "end_date",
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [isEdit, setIsEdit] = useState(null);
  const [loading,setLoading] = useState(false)
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getApiData = () => {
    setLoading(true)
    getData("experiences").then((res) => setSkillData(res.data.data)).finally(() => {
      setLoading(false)
    });
  };
  const onFinish = (values) => {
    console.log("Success:", values);

    if (isEdit) {
      console.log("put", isEdit);
      putData(`experiences/${isEdit._id}`, values).then(() => {
        getApiData();
      });
      setIsEdit(null);
    } else {
      console.log("post", isEdit);

      postData("experiences", values).then(() => {
        getApiData();
      });
    }
    form.resetFields();

    setIsModalVisible(false);
  };
  const deleteApiData = () => {
    selected.map((item) => deleteData(`experiences/${item._id}`));
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
    <div className="content-body">
      <div className="content-title">
        <h3>Experiences</h3>
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
                Add Experiences
              </Button>
            </div>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[]}
          >
            <Form
              name="normal_login"
              form={form}
              layout="vertical"
              // className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="work_name"
                label="Work Name"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="company_name"
                label="Company Name"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="start_date"
                label="Start Date"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="end_date"
                label="End Date"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input />
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
    {loading ? <Skeleton active />: <Table
          className="mt-4"
          rowKey="_id"
          rowSelection={{
            type: "chekbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={skillData}
        />}    
      </Content>
    </div>
  );
};

export default Experiences;

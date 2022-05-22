import { Table ,Modal, Button, Form, Input} from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useState } from 'react'
import { UserOutlined,  PercentageOutlined } from '@ant-design/icons';

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
   
  ];
  const data = [
    {
      key: "1",
      name: "JavaScript",
      percent: 32,
     
    },
    {
      key: "2",
      name: "React js",
      percent: 42,
     
    },
   
  ];
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

const Skills = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    setIsModalVisible(false);

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
    <div className='d-flex w-100 justify-content-between'>
    <Button type="primary" danger >
      Delete
      </Button>

    <Button type="primary" onClick={showModal}>
        Add Skill
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
      footer={
        [
        
        ]
      }>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="percent"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<PercentageOutlined  className="site-form-item-icon" />}
          placeholder="Percent"
        />
      </Form.Item>
    

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Add
        </Button>

      </Form.Item>
    </Form>
      </Modal>
    </div>
    <Table
    className='mt-4'
      rowSelection={{
        type: "chekbox",
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
    />
  </Content>
</div>
    </div>
  )
}

export default Skills
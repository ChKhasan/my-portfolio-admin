import { Table ,Modal, Button, Form, Input, Checkbox} from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useState } from 'react'

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
  ];
  const data = [
    {
      key: "1",
      work_name: "Front End Developer",
      company_name: "Marcossoft",
      description: "Medpay",
      start_date: "2020-05-05",
      end_date: "2022-07-08"

    },
    {
      key: "2",
      work_name: "Front End Developer",
      company_name: "Marcossoft",
      description: "Medpay",
      start_date: "2020-05-05",
      end_date: "2022-07-08"
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

const Experiences = () => {
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
       layout='vertical'
      // className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="work_name"
        label="Work Name"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input   />
      </Form.Item>

      <Form.Item
        name="company_name"
        label="Company Name"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input   />
      </Form.Item>

      <Form.Item
        name="start_date"
        label="Start Date"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="end_date"
        label="End Date"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input />
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
  )
}

export default Experiences
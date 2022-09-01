import { Button, Upload, Checkbox, Form, Input, Select } from "antd";
import ImgCrop from "antd-img-crop";
import axios from "axios";
import React, { useState } from "react";

const onChange1 = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const CreateTeacher = () => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const [form] = Form.useForm();

  const onGenderChange = (value) => {};

  const onFinish = (values) => {
    console.log(values);
    axios.post("http://192.168.0.243:3000/teacher",values)
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };

  return (
    <div className="content-body">
      <div className="row mt-5 mx-4 d-flex justify-content-between">
        <div className="col-3  ">
          <div className="w-100 upload_teacher">
            <div className="d-flex justify-content-start w-100">
              <p>Rasm*</p>
            </div>
            <ImgCrop rotate className="d-flex justify-content-center">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && "+ Upload"}
              </Upload>
            </ImgCrop>
            <Button type="primary" className="mt-3">
              Rasmni yuklash
            </Button>
          </div>
          <div className="chooseLesson mt-5">
            <p>Darsni tanlang</p>
            <Checkbox onChange={onChange1}>Guruh Zoom</Checkbox>
            <Checkbox onChange={onChange1} className="mt-4">
              Individual Zoom
            </Checkbox>
          </div>
        </div>
        <div className="col-9 form_box">
          <Form
            {...layout}
            layout="vertical"
            form={form}
            name="control-hooks"
            className="d-flex w-100 flex-wrap"
            onFinish={onFinish}
          >
            <div className="col-6 control_col">
              <Form.Item
                name="firstName"
                label="Ism"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Jinsi"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={onGenderChange}
                  allowClear
                  style={{ border: "1px solid #d9d9d9" }}
                >
                  <Option value="male">male</Option>
                  <Option value="female">ayol</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Telefon raqami"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="birthDate"
                label="Tug'ulgan sana"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="hobbies"
                label="Faoliyat turi"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
               <Input />
              </Form.Item>
              <Form.Item
                name="languageLevel"
                label="Til darajasi"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="introText"
                label="Shiori"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>{" "}
              <Form.Item
                name="zoomLink"
                label="Zoom link"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="videoUrl"
                label="video url"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="coverImg"
                label="Cover Img"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="imgUrl"
                label="Img"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="col-6 control_col">
              <Form.Item
                name="lastName"
                label="Familiya"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="address"
                label="Manzil"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Parol"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="telegramUsername"
                label="Telegram username"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="subject"
                label="Fani"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={onGenderChange}
                  allowClear
                  style={{    border: "1px solid #d9d9d9"}}
                >
                  <Option value="english">english</Option>
                 
                </Select>
              </Form.Item>
              <Form.Item
                name="cardNumber"
                label="Karta raqami"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="activity"
                label="Holati"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={onGenderChange}
                  allowClear
                  style={{    border: "1px solid #d9d9d9"}}
                >
                  <Option value="active">active</Option>
                  <Option value="noactive">no active</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="exprience"
                label="Qaysi darajada dars o'tishi"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={onGenderChange}
                  allowClear
                  style={{    border: "1px solid #d9d9d9"}}
                >
                  <Option value="bigenner">bigenner</Option>
                  
                </Select>
              </Form.Item>
              {/* <Form.Item
                name="introText"
                label="into Text"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item> */}
              <Form.Item
                name="lessonPrice"
                label="Lasson price"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="motto"
                label="Motto"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="col-12 ">
                
              <Form.Item {...tailLayout}>
                <Button  htmlType="button" onClick={onReset}>
                  Bekor qilish
                </Button>
                <Button style={{marginLeft: "24px"}} type="primary" htmlType="submit">
                  Saqlash
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateTeacher;

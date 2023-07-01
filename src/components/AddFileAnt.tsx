import React from "react";
import { Form, Input } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values: any) => {
  console.log(values);
};

const AddFileAnt: React.FC = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={["title", "title"]}
      label="Title"
      rules={[{ required: true }]}
    >
      <Input />
    </Form.Item>

    <Form.Item name={["description", "description"]} label="Description">
      <Input.TextArea />
    </Form.Item>
  </Form>
);

export default AddFileAnt;

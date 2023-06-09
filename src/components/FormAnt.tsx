import React, { FC, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { InputLabel } from "@mui/material";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

type TStateForm = {
  title?: string;
  setTitle: any;
  setIsEdit: any;
  description?: string;
  video?: string;
  privImg?: string;
  categoryes?: string;
  models?: string;
};

export const FotmAnt: FC<TStateForm> = ({ title, setTitle, setIsEdit }) => {
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };
  const [description, setDescription] = useState("");
  const [stateValueForm, setStateValueForm] = useState<TStateForm>();

  return (
    <Form
      name="nest-messages"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      style={{ maxWidth: 1000, color: "#fff" }}
    >
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error("At least 2 passengers"));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? "Passengers" : ""}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message:
                        "Please input passenger's name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input
                    placeholder="passenger name"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <input
                type="file"
                placeholder='Add video' 
                style={{ width: "100%" }}
                
              />
               
              
              <Button
                type="dashed"
                onClick={() => {
                  add("The head item", 0);
                }}
                style={{ width: "100%", marginTop: "20px" }}
                icon={<PlusOutlined />}
              >
                Add privImage
              </Button>
              <Button
                type="dashed"
                onClick={() => {
                  add("The head item", 0);
                }}
                style={{ width: "100%", marginTop: "20px" }}
                icon={<PlusOutlined />}
              >
                Add Gif
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item name={["title", "title"]} rules={[{ required: true }]}>
        <h2>
          Title: {title}
        </h2>
        <Input
          placeholder="Ведите title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name={["description", "description"]}
        rules={[{ required: true }]}
      >
        <h2>
          Description:{" "}
          {description}
        </h2>
        <Input.TextArea
          placeholder="Ведите description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          onClick={() => setIsEdit(false)}
          type="primary"
          htmlType="submit"
        >
          Далее
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FotmAnt;

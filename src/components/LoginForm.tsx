import React from "react";

import { Button, Form, Input, notification } from "antd";
import { LoginFormDto } from "@/api/dto/auth.dto";

import { setCookie } from "nookies";
import { loginUser } from "@/api/auth";
import { FormBlock } from "./RegisterForm";

const LoginFormMem = () => {
  const onSubmit = async (value: LoginFormDto) => {
    try {
      const { token } = await loginUser(value);

      notification.success({
        message: "Успешно!",
        description: "Переходим в админ-панель...",
        duration: 2,
      });
      setCookie(null, "_token", token, {
        path: "/profile",
      });

      location.href = "/";
    } catch (error) {
      notification.error({
        message: "Ошибка!",
        description: "Не верный логин или пароль...",
        duration: 2,
      });
    }
  };

  return (
    <FormBlock>
      <Form
        style={{ color: "white" }}
        name="basic"
        labelCol={{
          span: 5,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          style={{ color: "white" }}
          label="eMail"
          name="email"
          rules={[
            {
              required: true,
              message: "Укажите почту",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Укажите pssword",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            style={{
              background: "var(--colors-btn)",
              boxShadow: "0px 0px 20px",
            }}
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </FormBlock>
  );
};

export const LoginForm = React.memo(LoginFormMem);

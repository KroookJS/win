import React, { useRef, useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { RegisterFormDto } from "@/api/dto/auth.dto";
import { setCookie } from "nookies";

import { registerUser } from "@/api/auth";
import styled from "styled-components";
import { ButtonCategoryPage, ButtonDelete, ButtonNext } from "@/ui/Button";
import { UploadVideo } from "@/api/upload";

export const FormBlock = styled.main`
  background-image: var(--colors-line-hub);
  border-radius: 30px 0px 30px 30px;
  padding: 20px;
`;

const AvaBlock = styled.img`
  width: 92px;
  height: 91px;
  border-radius: 50%;
  border: 4px solid var(--colors-bg-cart);
`;

const RegisterFormMem = () => {
  const [valueAvata, setValueAvatar] = useState("");
  const inputRef = useRef<any>(null);

  const handleChangeFileAvatar = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      UploadVideo(formData).then((res) => setValueAvatar(res));
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (value: RegisterFormDto) => {
    try {
      const newValue = valueAvata ? { ...value, avatarUrl: valueAvata } : value;

      const data = await registerUser(newValue);
      notification.success({
        message: "Успешно!",
        description: `Добро пожалуйста ${
          value?.fullName && "новый пользователь"
        }`,
        duration: 2,
      });

      const dataString = JSON.stringify(data);

      setCookie(null, "user", dataString, {
        path: "/",
      });
      location.href = "/";
    } catch (error) {
      notification.error({
        message: "Ошибка!",
        description: "Ожибка при регистрации...",
        duration: 2,
      });
    }
  };

  return (
    <FormBlock>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AvaBlock
          src={
            valueAvata
              ? "http://37.1.219.168:4444" + valueAvata
              : "https://static4.tgstat.ru/channels/_0/19/198d4555a01171d3b94bb61a37ba9aaf.jpg"
          }
          alt="upload an avatar"
        />
        <ButtonCategoryPage onClick={() => inputRef.current.click()}>
          Upload an Avatar
        </ButtonCategoryPage>
        <input
          ref={inputRef}
          type="file"
          onChange={handleChangeFileAvatar}
          hidden
        />
      </div>

      <Form
        name="basic"
        labelCol={{
          span: 5,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          style={{ color: "white" }}
          label="Login"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Укажите полное имя",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="E-Mail"
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
            Registration
          </Button>
        </Form.Item>
      </Form>
    </FormBlock>
  );
};

export const RegisterForm = React.memo(RegisterFormMem);

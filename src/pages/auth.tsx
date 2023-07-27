import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import { Layout } from "@/layout/Layout";
import { Tabs } from "antd";
import { NextPage } from "next";

import React from "react";

const AuthPage: NextPage = () => {
  return (
    <>
      <Layout title="Auth / TelePorn">
        <div style={{ margin: 0 }}>
          <Tabs
            style={{ alignItems: "center", color: "var(--colors-btn)" }}
            items={[
              {
                label: "Login",
                key: "1",
                children: <LoginForm />,
              },
              {
                label: "Registration",
                key: "2",
                children: <RegisterForm />,
              },
            ]}
          />
        </div>
      </Layout>
    </>
  );
};

export default AuthPage;

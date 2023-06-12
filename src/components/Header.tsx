import React from "react";
import { Container, ContainerHeader } from "../ui/container";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillSearchHeartFill } from "react-icons/bs";
import Link from "next/link";
import {
  CartPrice,
  HeaderEl,
  Logo,
  ModeCart,
  WrapperHeader,
} from "@/ui/HeaderStyles";
import { LinkStyle } from "@/ui/Button";
import styled from "styled-components";

const LogoColor = styled.h2`
  font-size: 24px;
  color: var(--colors-btn);
  font-weight: 600;
  padding: 0 0 0 5px;
`;

const InputSearch = styled.input`
  border: none;
  padding: 18px;
  font-size: 16px;
  width: 70%;
  height: 30px;
  border-radius: 20px;
  background: #303b51;
`;

export const Header = () => {
  return (
    <HeaderEl>
      <ContainerHeader>
        <WrapperHeader>
          <Link style={LinkStyle} href="/">
            <LogoColor>ON</LogoColor>
          </Link>

          <InputSearch placeholder="search for...." />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              paddingRight: 7,
            }}
          >
            <BsFillSearchHeartFill
              style={{ fontSize: 20, color: "rgb(39 178 25)" }}
            />
          </div>
        </WrapperHeader>
      </ContainerHeader>
    </HeaderEl>
  );
};

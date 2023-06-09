"use client";
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

const ButtonUpload = styled.button`
  display: none;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 15px;
  background-image: linear-gradient(
    to right top,
    #ffc600 20%,
    #ff0040,
    #e600cc 80%
  );
  color: #fff;

  @media (min-width: 767px) {
    display: block;
  }
`;

const LogoColor = styled.h2`
  font-size: 34px;
  color: var(--colors-btn);
  font-weight: 600;
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
            {/* <Logo> */}
            <LogoColor>ON</LogoColor>
            {/* </Logo> */}
          </Link>

          {/* <Link href="/addPost" style={LinkStyle}>
            <ButtonUpload>Upload</ButtonUpload>
          </Link> */}

          <InputSearch placeholder="search for...." />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <BsFillSearchHeartFill
              style={{ fontSize: 25, color: "rgb(39 178 25)" }}
            />
            {/* <GiHamburgerMenu style={{ fontSize: 30 }} /> */}
          </div>
        </WrapperHeader>
      </ContainerHeader>
    </HeaderEl>
  );
};

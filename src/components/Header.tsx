"use client";
import React from "react";
import { Container } from "../ui/container";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { CartPrice, HeaderEl, Logo, ModeCart, WrapperHeader } from "@/ui/HeaderStyles";
import { LinkStyle } from "@/ui/Button";

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <WrapperHeader>
          <Link style={LinkStyle} href="/">
            <Logo>A Z O N</Logo>
          </Link>
          <ModeCart>
            <AiOutlineShoppingCart
              style={{ fontSize: 20, color: "GrayText" }}
            />
            <CartPrice>0.0$</CartPrice>
          </ModeCart>
        </WrapperHeader>
      </Container>
    </HeaderEl>
  );
};

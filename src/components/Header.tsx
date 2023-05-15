"use client";
import React from "react";
import styled from "styled-components";
import { Container } from "./container";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  padding: 7px 0;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h2`
  font-size: 30px;
  color: #005bff;
  font-weight: 300;
`;

const ModeCart = styled.div`
  padding: 5px 15px;
  border-radius: 10px;
  background: #eaeaea;
  cursor: pointer;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 10px;

  box-shadow: var(--shadow);
`;

const CartPrice = styled.span`
  color: #5faba6;
  font-size: 20px;
`;

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Link style={{ listStyle: "none", textDecoration: "none" }} href="/">
            <Logo>A Z O N</Logo>
          </Link>
          <ModeCart>
            <AiOutlineShoppingCart
              style={{ fontSize: 20, color: "GrayText" }}
            />
            <CartPrice>0.0$</CartPrice>
          </ModeCart>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

import { LinkStyle } from "@/ui/Button";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const BtnUpload = styled.button`
  height: 36px;
  width: 38px;
  border: none;
  border-radius: 35px;
  background-image: var(--colors-line-hub);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlusNavBar = () => {
  return (
    <Link href="/addPost" style={LinkStyle}>
      <BtnUpload>
        <AiOutlinePlus />
      </BtnUpload>
    </Link>
  );
};

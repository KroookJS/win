import React, { FC, useContext } from "react";
import {
  AiFillHome,
  AiOutlinePlus,
  AiTwotoneThunderbolt,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { CustomContext } from "@/contrex/TasksProvider";
import { PlusNavBar } from "./ui/PlusNavBar";

const NavBarModelConrainer = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  position: fixed;
  bottom: 14px;
  left: 2%;
  background: #192033;
  padding: 0 4px;
  z-index: 100;
  box-shadow: 0 4px 20px #eb855b59;
  padding: 0 1.5rem;
  border-radius: 25px;

  @media (min-width: 767px) {
    display: none;
  }
`;

export const BtnUpload = styled.button`
  height: 36px;
  width: 38px;
  border: none;
  border-radius: 35px;
  /*  background-image: linear-gradient(
    to right top,
    #ffc600 20%,
    #62a75bab,
    #27b319 80%
  ); */
  background-image: var(--colors-line-hub);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const iconStyle = {
  width: "35px",
  fontSize: "24px",
  color: "#ccc",
};

export const IconCount = styled.div`
  border-radius: 46%;
  background: var(--colors-btn);
  color: white;
  padding: 0px 6px;
  font-size: 14px;
  position: absolute;
  top: 13px;
  right: -2px;
`;

type TProps = {
  count?: number;
};
export const NavBarModel: FC<TProps> = () => {
  const { likeArr } = useContext(CustomContext);
  return (
    <NavBarModelConrainer>
      <Link href="/" style={LinkStyle}>
        <AiFillHome style={iconStyle} />
      </Link>
      <Link href="/category">
        <AiTwotoneThunderbolt style={iconStyle} />
      </Link>
      <PlusNavBar />
      <Link href="/favorite">
        <div style={{ position: "relative" }}>
          <MdOutlineFavoriteBorder style={iconStyle} />
          <IconCount>{likeArr.length}</IconCount>
        </div>
      </Link>
      <Link href="/profile" style={LinkStyle}>
        <CgProfile style={iconStyle} />
      </Link>
    </NavBarModelConrainer>
  );
};

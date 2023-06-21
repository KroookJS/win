import React, { FC, useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { CustomContext } from "@/contrex/TasksProvider";

const NavBarModelConrainer = styled.div`
  height: 48px;
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

const BtnUpload = styled.button`
  height: 43px;
  width: 45px;
  border: none;
  border-radius: 35px;
  background-image: linear-gradient(
    to right top,
    #ffc600 20%,
    #62a75bab,
    #27b319 80%
  );
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

const IconCount = styled.div`
  border-radius: 46%;
  background: #27b219;
  color: white;
  padding: 0px 5px;
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
        <BiCategoryAlt style={iconStyle} />
      </Link>
      <Link href="/addPost" style={LinkStyle}>
        <BtnUpload>
          <AiOutlinePlus />
        </BtnUpload>
      </Link>
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

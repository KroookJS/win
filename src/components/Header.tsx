import React, { useContext } from "react";
import { ContainerHeader } from "../ui/container";

import { BsFillSearchHeartFill } from "react-icons/bs";
import Link from "next/link";
import { HeaderEl, ModeCart, WrapperHeader } from "@/ui/HeaderStyles";
import { LinkStyle } from "@/ui/Button";
import styled from "styled-components";
import { CustomContext } from "@/contrex/TasksProvider";

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
  width: 55%;
  height: 30px;
  border-radius: 20px;
  background: #303b51;
`;

export const Header = () => {
  const { search, setSearch } = useContext(CustomContext);
  return (
    <HeaderEl>
      <ContainerHeader>
        <WrapperHeader>
          <Link style={LinkStyle} href="/">
            <LogoColor>YouPorn</LogoColor>
          </Link>

          <InputSearch
            placeholder="search for...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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

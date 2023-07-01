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

  font-weight: 600;
  padding: 9px;
  background: var(--colors-btn);
  border-radius: 30px;
  margin-left: 2px;
`;

const InputSearch = styled.input`
  border: none;
  padding: 18px;
  font-size: 16px;
  width: 55%;
  height: 30px;
  border-radius: 20px;
  background: #303b51;

  @media (max-width: 377px) {
    width: 45%;
  }
`;

export const Header = () => {
  const { search, setSearch } = useContext(CustomContext);
  return (
    <HeaderEl>
      <ContainerHeader>
        <WrapperHeader>
          <Link style={LinkStyle} href="/">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2>You</h2>
              <LogoColor>Porn</LogoColor>
            </div>
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
              style={{ fontSize: 20, color: "var(--colors-btn)" }}
            />
          </div>
        </WrapperHeader>
      </ContainerHeader>
    </HeaderEl>
  );
};

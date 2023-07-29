import React, { useContext } from "react";
import { ContainerHeader } from "../ui/container";

import { useRouter } from "next/router";
import Link from "next/link";
import { HeaderEl, WrapperHeader } from "@/ui/HeaderStyles";
import { LinkStyle } from "@/ui/Button";
import styled from "styled-components";
import { CustomContext } from "@/contrex/TasksProvider";
import { AiOutlineLogin } from "react-icons/ai";

export const LogoColor = styled.h2`
  font-size: 22px;

  font-weight: 600;
  padding: 5px 8px;
  background: var(--colors-btn);
  border-radius: 15px;
  margin-left: 1px;

  /* box-shadow: 0 0 20px; */
  cursor: pointer;
`;

const InputSearch = styled.input`
  border: none;
  padding: 18px;
  font-size: 16px;
  width: 50%;
  height: 30px;
  border-radius: 20px;
  background: #303b51;

  @media (max-width: 377px) {
    width: 45%;
  }
`;

export const Header = () => {
  const router = useRouter();
  const { search, setSearch } = useContext(CustomContext);
  return (
    <HeaderEl>
      <ContainerHeader>
        <WrapperHeader>
          <Link style={LinkStyle} href="/">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2 style={{ fontSize: 20, cursor: "pointer" }}>Tele</h2>
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
            <AiOutlineLogin
              onClick={() => router.push("/auth")}
              style={{
                fontSize: 35,
                color: "var(--colors-btn)",
                background: "#e3edf608",
                boxShadow: "0 0 10px",
                borderRadius: 30,
                padding: 5,
              }}
            />
          </div>
        </WrapperHeader>
      </ContainerHeader>
    </HeaderEl>
  );
};

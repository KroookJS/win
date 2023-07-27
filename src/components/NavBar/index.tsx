import styles from "./HederSpotify.module.scss";
import {
  AiFillHome,
  AiOutlineLogin,
  AiOutlineSearch,
  AiTwotoneThunderbolt,
} from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { FiZap } from "react-icons/fi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import styled from "styled-components";
import { LogoColor } from "../Header";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { BiCategoryAlt } from "react-icons/bi";
import { PlusNavBar } from "../NavBarModel/ui/PlusNavBar";
import { IconCount } from "../NavBarModel";
import { CustomContext } from "@/contrex/TasksProvider";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";

const NavBarContainer = styled.div`
  max-width: 20%;
  margin: 10px;
  background-image: linear-gradient(
    to left bottom,
    #000000,
    #000000,
    #000000,
    #000000,
    #000000,
    #0d0b0c,
    #161315,
    #1c191c,
    #29272e,
    #32374266,
    #37485567,
    #3c5b6451
  );
  height: 100vh;
  position: fixed;
  left: -10px;
  top: -10px;
  width: 100%;

  border-right: solid 1px rgba(245, 222, 179, 0.144);

  @media (max-width: 1000px) {
    display: none;
  }
`;
const NavBarContent = styled.div`
  padding-top: 18px;
  padding-bottom: 10px;
  position: relative;
  max-width: 85%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const FlexText = styled.div`
  flex: 1;
`;

const NavBarItem = styled.div`
  margin-top: 10px;
`;
const IconSearch = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;

  margin-top: 7px;
  padding: 0 10px;

  cursor: pointer;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.09);
    border-radius: 20px;
    background: #161315;
    font-weight: 600;
  }
`;

const NavItemP = styled.p`
  margin-left: 10px;
`;
const NavDownBLock = styled.div`
  /* border-bottom: 1px solid #fff; */
`;

function NavBar() {
  const styleForPaper = {
    width: "30px",
    height: "30px",
  };
  const { likeArr } = useContext(CustomContext);
  const router = useRouter();
  return (
    <NavBarContainer>
      <NavBarContent>
        <FlexText>
          <Link href="/">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
              }}
            >
              <h2 style={{ fontSize: 20, cursor: "pointer" }}>Tele</h2>
              <LogoColor>Porn</LogoColor>
            </div>
          </Link>

          <NavBarItem>
            <Link href="/" style={LinkStyle}>
              <IconSearch>
                <AiFillHome style={styleForPaper} />
                <NavItemP>Home</NavItemP>
              </IconSearch>
            </Link>
          </NavBarItem>

          <NavBarItem>
            <Link href="/category">
              <IconSearch>
                <BiCategoryAlt style={styleForPaper} />
                <NavItemP>Category</NavItemP>
              </IconSearch>
            </Link>
            <Link href="/model">
              <IconSearch>
                <AiTwotoneThunderbolt style={styleForPaper} />
                <NavItemP>Models</NavItemP>
              </IconSearch>
            </Link>

            <Link href="/profile" style={LinkStyle}>
              <IconSearch>
                <CgProfile style={styleForPaper} />
                <NavItemP>Profile</NavItemP>
              </IconSearch>
            </Link>

            <Link href="/favorite">
              <IconSearch>
                <div style={{ position: "relative" }}>
                  <MdOutlineFavoriteBorder style={styleForPaper} />
                  <IconCount>{likeArr.length}</IconCount>
                </div>

                <NavItemP>Favorite</NavItemP>
              </IconSearch>
            </Link>
            <Link href="/addPost">
              <IconSearch>
                <PlusNavBar />
                <NavItemP>Upload</NavItemP>
              </IconSearch>
            </Link>
          </NavBarItem>
        </FlexText>

        <div>
          <NavDownBLock onClick={() => router.push("/auth")}>
            <IconSearch>
              <AiOutlineLogin
                style={{
                  fontSize: 35,
                  color: "var(--colors-btn)",
                  background: "#e3edf608",
                  boxShadow: "0 0 10px",
                  borderRadius: 30,
                  padding: 5,
                }}
              />
              <NavItemP>Login</NavItemP>
            </IconSearch>
          </NavDownBLock>
        </div>
      </NavBarContent>
    </NavBarContainer>
  );
}

export default NavBar;

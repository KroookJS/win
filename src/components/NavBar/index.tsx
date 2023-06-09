import styles from "./HederSpotify.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { FiZap } from "react-icons/fi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import styled from "styled-components";

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

  @media (max-width: 1200px) {
    display: none;
  }
`;
const NavBarContent = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  position: relative;
  max-width: 85%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.div`
  cursor: pointer;
  padding: 0 10px;
  color: #28f64ea3;
`;
const NavBarTitle = styled.h2`
  color: var(--colors-btn);
`;
const FlexText = styled.div`
  flex: 1;
`;
const FlexOne = styled.div`
  flex: 1;
`;
const FlexTwo = styled.div`
  flex: 2;
`;
const NavBarItem = styled.div`
  margin-top: 20px;
`;
const IconSearch = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;

  margin-top: 15px;
  padding: 10px;

  cursor: pointer;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
`;

const NavItemP = styled.p`
  margin-left: 10px;
  &:hover {
    transform: scale(1.09);
    border-radius: 20px;
    background: #161315;
    font-weight: 600;
  }
`;
const NavDownBLock = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 2px;
  border-bottom: 1px solid #fff;
`;

const NavUserkFooter = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 2px;
`;

function NavBar() {
  const styleForPaper = {
    width: "30px",
    height: "30px",
  };

  return (
    <NavBarContainer>
      <NavBarContent>
        <FlexText>
          <Logo>
            <NavBarTitle /* style={{ color: "Highlight" }} */>
              We Work
            </NavBarTitle>
          </Logo>

          <NavBarItem>
            <IconSearch>
              <AiOutlineSearch style={styleForPaper} />
              <NavItemP>Profile</NavItemP>
            </IconSearch>
            <IconSearch>
              <AiOutlineHome style={styleForPaper} />
              <NavItemP>Home</NavItemP>
            </IconSearch>
            <IconSearch>
              <FiZap style={styleForPaper} />
              <NavItemP>YourLibary</NavItemP>
            </IconSearch>

            <IconSearch>
              <MdOutlineFavoriteBorder style={styleForPaper} />
              <NavItemP>FavoriteBrand</NavItemP>
            </IconSearch>
          </NavBarItem>
          <NavBarItem>
            <IconSearch>
              <AiOutlineSearch style={styleForPaper} />
              <NavItemP>Profile</NavItemP>
            </IconSearch>
            <IconSearch>
              <AiOutlineHome style={styleForPaper} />
              <NavItemP>Home</NavItemP>
            </IconSearch>
            <IconSearch>
              <FiZap style={styleForPaper} />
              <NavItemP>YourLibary</NavItemP>
            </IconSearch>

            <IconSearch>
              <MdOutlineFavoriteBorder style={styleForPaper} />
              <NavItemP>FavoriteBrand</NavItemP>
            </IconSearch>
          </NavBarItem>
        </FlexText>

        <div>
          <NavDownBLock>
            <div>
              <BsCloudUpload style={styleForPaper} />
              <h5>Install App</h5>
            </div>

            <NavUserkFooter>
              <AiOutlineUser style={styleForPaper} />
              <h5>UserTime</h5>
            </NavUserkFooter>
          </NavDownBLock>
        </div>
      </NavBarContent>
    </NavBarContainer>
  );
}

export default NavBar;

import { getAllProducts } from "@/api/products";
import CartColumnProfile from "@/components/CartColumnProfile";
import { Header } from "@/components/Header";
import { NavBarModel } from "@/components/NavBarModel";
import { IPost } from "@/types/Post";
import { TProducts } from "@/types/Product";
import React, { useEffect, useState } from "react";
import { BsPostcard } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import styled from "styled-components";

const ContainerProfileHead = styled.div`
  background: #27262b;
  height: 261px;
  position: relative;
  top: -20px;
  z-index: -1;
`;

const Column = styled.div`
  padding: 2.3rem 1rem 0.3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  positon: reletive;
`;

const LeftBlockSave = styled.div`
  width: 140px;
  height: 80px;
  border-radius: 30px 0 0 30px;

  background-image: linear-gradient(to right, #9b7533 7%, #5c503a, #3e383a 80%);
  position: absolute;
  right: 55%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvaCenter = styled.img`
  width: 118px;
  height: 118px;
  object-fit: cover;
  border: 6px solid #383338;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 1px 10px #ffd;
`;

const RightBlockLike = styled.div`
  width: 140px;
  height: 80px;
  border-radius: 0px 30px 30px 0px;
  background-image: linear-gradient(to left, #962d50 7%, #603a46, #3e383a 80%);
  position: absolute;
  left: 55%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlockInfoStatick = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: reletive;
`;
const TextStatickBorder = styled.h5`
  font-size: 19px;
  color: #fff;
  padding: 10px;
  border-bottom: 1px solid #544a36;
`;
const TextStatick = styled(TextStatickBorder)`
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #979184;
`;

const BlockIconRight = styled.div`
  padding: 3px;
  background: #e51c59;
  position: absolute;
  left: 89%;
  top: 34%;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 3px solid #2a212b;
`;
const BlockIconLeft = styled(BlockIconRight)`
  left: -10%;
  background: #ffbd1f;
`;

const NameProfile = styled(TextStatickBorder)`
  text-align: center;
  font-size: 22px;
  padding: 0;
  border: none;
`;
const TagName = styled.h5`
  text-align: center;
  color: var(--colors-btn);
  font-size: 15px;
`;

export const ContainerProfileBody = styled.div`
  background: #19191b;
  min-height: 94vh;
  position: relative;
  top: -48px;
  border-radius: 50px 50px 0 0;
  box-shadow: 0 1px 50px #ffffdd59;
`;
export const PublicTitle = styled(TextStatickBorder)`
  text-align: center;
  font-size: 16px;
  padding: 13px;
  border-bottom: 3px solid #fff;
  max-width: fit-content;
  margin: 0 auto 19px;
`;

export const WrapperProfileColumn = styled.section`
  width: 100%;
  padding: 0rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.3rem;

  @media (min-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    padding: 0.8rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    max-width: var(--width-mx);
    margin: 0 auto;
    padding: 2rem 1rem;
  }
`;
export const ImgPost = styled.img`
  width: 100%;
  height: 130px;
  border-radius: 7px;
  object-fit: cover;
`;

export default function Profile() {
  const [publicate, setPublicate] = useState<IPost[]>([]);

  useEffect(() => {
    const resProduct = async () => {
      return await getAllProducts().then((res) => setPublicate(res));
    };
    resProduct();
  }, []);

  return (
    <>
      <Header />
      <ContainerProfileHead>
        <Column>
          <LeftBlockSave>
            <BlockInfoStatick>
              <TextStatickBorder>31</TextStatickBorder>
              <TextStatick>Post</TextStatick>
              <BlockIconLeft>
                <BsPostcard style={{ color: "#000000" }} />
              </BlockIconLeft>
            </BlockInfoStatick>
          </LeftBlockSave>

          <AvaCenter
            src="https://wp-s.ru/wallpapers/4/16/351317600695361/paren-s-golubymi-glazami-s-sigaroj.jpg"
            alt="avatar"
          />

          <RightBlockLike>
            <BlockInfoStatick>
              <TextStatickBorder>1358</TextStatickBorder>
              <TextStatick>Liked</TextStatick>
              <BlockIconRight>
                <MdFavorite style={{ color: "white" }} />
              </BlockIconRight>
            </BlockInfoStatick>
          </RightBlockLike>
        </Column>
        <NameProfile>Lucife Adonis</NameProfile>
        <TagName>@theLucifer</TagName>
      </ContainerProfileHead>

      <CartColumnProfile publicate={publicate} title={"FavoritePublic"} />

      <NavBarModel />
    </>
  );
}

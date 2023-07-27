import { TitleHot } from "@/layout/Layout";
import { TitleIconBlock } from "@/pages";

import { IPost } from "@/types/Post";

import React from "react";
import { MdVideoLibrary } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";

import { NewShorts } from "../NewShorts";
import { PlusNavBar } from "../NavBarModel/ui/PlusNavBar";
import {
  ContainerProfileBody,
  ImgPost,
  PublicTitle,
  WrapperProfileColumn,
} from "../Profile/styleHederProfile";
import { BlockAddText, BlockPriveteTitle } from "./StyleCartcolumn";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";

export default function CartColumnProfile({
  publicate,
}: {
  publicate?: IPost[];
}) {
  const renderPost = publicate ? (
    <WrapperProfileColumn>
      {publicate.map((post: IPost) => {
        return (
          <Link key={post._id} href={`/details/${post._id}`} style={LinkStyle}>
            <ImgPost
              src={`http://localhost:4444${post.privUrl}`}
              alt="photo Profile"
            />
          </Link>
        );
      })}
    </WrapperProfileColumn>
  ) : (
    <h2>Loading...</h2>
  );

  const renderAddPostText = (
    <BlockAddText>
      <h2>
        You don't have any posts yet. Can you add your favorite 18+ videos?
      </h2>
      <PlusNavBar />
    </BlockAddText>
  );

  return (
    <>
      <ContainerProfileBody>
        <BlockPriveteTitle>
          <PublicTitle>Publicate </PublicTitle>
          <PublicTitle style={{ border: "none" }}>Private </PublicTitle>
        </BlockPriveteTitle>
        <TitleIconBlock>
          <MdVideoLibrary />
          <TitleHot>Shorts</TitleHot>
        </TitleIconBlock>
        <NewShorts />
        <TitleIconBlock style={{ margin: "15px 0" }}>
          <IoMdVideocam />
          <TitleHot>Videos</TitleHot>
        </TitleIconBlock>
        {publicate?.length ? renderPost : renderAddPostText}
      </ContainerProfileBody>
    </>
  );
}

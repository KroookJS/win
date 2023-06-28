import {
  ContainerProfileBody,
  ImgPost,
  PublicTitle,
  WrapperProfileColumn,
} from "@/pages/profile";
import { IPost } from "@/types/Post";
import { TProducts } from "@/types/Product";
import { Wrapper } from "@/ui/Wrraper";
import React from "react";

export default function CartColumnProfile({
  publicate,
  title,
}: {
  publicate?: IPost[];
  title?: string;
}) {
  return (
    <ContainerProfileBody>
      <PublicTitle>{title ? title : "Publication and Post"} </PublicTitle>

      <WrapperProfileColumn>
        {publicate &&
          publicate.map((post: IPost) => {
            return (
              <ImgPost
                key={post._id}
                src={`http://45.12.73.121:4444${post.privUrl}`}
                alt="photo Profile"
              />
            );
          })}
      </WrapperProfileColumn>
    </ContainerProfileBody>
  );
}

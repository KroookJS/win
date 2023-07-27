import React from "react";
import { CartPost } from "../Cart/CartPost";
import { TableDeskTop } from "../PageMarkup/TablDeskTop";
import { CartFavorite } from "../Cart/CartFavorite";
import { IPost } from "@/types/Post";

export default function GetItem({
  post,
  cartType,
}: {
  post?: IPost[];
  cartType?: boolean;
}) {
  return (
    <TableDeskTop>
      {post
        ? post.map((post: IPost) => <CartPost key={post._id} {...post} />)
        : "Hi, this is TelePorn"}
    </TableDeskTop>
  );
}

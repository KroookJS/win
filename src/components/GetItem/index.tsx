import { getAllProducts } from "@/api/products";
import { TItemProduct, TProducts } from "@/types/Product";
import React from "react";
import { List } from "../Cart/List";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { CartPost } from "../Cart/CartPost";
import { TableDeskTop } from "../TablDeskTop";
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
        ? post.map((post: IPost) => {
            return cartType ? (
              <CartFavorite key={post._id} {...post} />
            ) : (
              <CartPost key={post._id} {...post} />
            );
          })
        : "Hi"}
    </TableDeskTop>
  );
}

/* export async function getServerSideProps() {
  const product = await getAllProducts();
  return {
    props: {
      post,
    },
  };
}
 */

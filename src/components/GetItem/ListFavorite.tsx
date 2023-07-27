import React, { FC } from "react";

import { TableDeskTop } from "../PageMarkup/TablDeskTop";
import { CartFavorite } from "../Cart/CartFavorite";
import { IPost } from "@/types/Post";

type TProps = {
  favorite: IPost[];
};

export const ListFavorite: FC<TProps> = ({ favorite }) => {
  return (
    <TableDeskTop typePage={true}>
      {favorite
        ? favorite.map((fav: IPost) => <CartFavorite key={fav._id} {...fav} />)
        : "Hi, this is page favorite"}
    </TableDeskTop>
  );
};

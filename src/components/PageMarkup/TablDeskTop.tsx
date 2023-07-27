import { TMarkup } from "@/types/Product";
import { WraaperDeskTop, WrapperFavorite } from "@/ui/Wrraper";
import React, { FC } from "react";

export const TableDeskTop: FC<TMarkup> = ({ children, typePage }) => {
  const renderFavoritePage = <WrapperFavorite>{children}</WrapperFavorite>;
  const renderPage = <WraaperDeskTop>{children}</WraaperDeskTop>;
  return typePage ? renderFavoritePage : renderPage;
};

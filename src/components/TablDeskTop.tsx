import { TChildren } from "@/types/Product";
import { WraaperDeskTop, } from "@/ui/Wrraper";
import React, { FC } from "react";

export const TableDeskTop: FC<TChildren> = ({ children }) => {
  return <WraaperDeskTop>{children}</WraaperDeskTop>;
};

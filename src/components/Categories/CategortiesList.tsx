import { TChildren } from "@/types/Product";
import { Wrapper } from "@/ui/Wrraper";
import React, { FC } from "react";

export const CategortiesList: FC<TChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
};

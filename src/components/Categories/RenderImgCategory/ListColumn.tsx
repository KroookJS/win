import { TChildren } from "@/types/Product";
import {
  WrapperSliderRecomendation,
} from "@/ui/Wrraper";
import React, { FC } from "react";

export const CategortiesImgList: FC<TChildren> = ({ children }) => {
  return <WrapperSliderRecomendation>{children}</WrapperSliderRecomendation>;
};

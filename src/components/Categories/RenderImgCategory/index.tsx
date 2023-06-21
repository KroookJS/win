import React from "react";
import { CategortiesList } from "../CategortiesList";
import { catigoryImage } from "@/utils/catigoryImg";
import { TItemSlider } from "@/types/Slider";

import { ImgCatigory } from "../ImgCatigory";
import { CategortiesImgList } from "./ListColumn";
import { ImgMyTestKategory } from "../ImgMyTestKategory";
import { LinkStyle } from "@/ui/Button";
import Link from "next/link";

export const RenderImgCategory = () => {
  return (
    <CategortiesImgList>
      {catigoryImage &&
        catigoryImage.map((img: TItemSlider) => {
          return (
            <ImgMyTestKategory
              image={img.image}
              title={img.title}
              href={img.href}
            />
          );
        })}
    </CategortiesImgList>
  );
};

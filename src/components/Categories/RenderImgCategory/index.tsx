import React from "react";

import { catigoryImage } from "@/utils/catigoryImg";
import { TItemSlider } from "@/types/Slider";


import { CategortiesImgList } from "./ListColumn";
import { ImgMyTestKategory } from "../ImgMyTestKategory";



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

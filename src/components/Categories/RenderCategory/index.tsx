import React from "react";
import { catigoryImage } from "@/utils/catigoryImg";
import { TItemSlider } from "@/types/Slider";

import { ListColumn } from "./ListColumn";
import { ImgMyTestKategory } from "../ImgMyTestKategory";

export const RenderCategory = () => {
  return (
    <ListColumn>
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
    </ListColumn>
  );
};

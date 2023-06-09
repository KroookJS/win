import React from "react";
import { CategortiesList } from "../CategortiesList";
import { catigoryImage } from "@/utils/catigoryImg";
import { TItemSlider } from "@/types/Slider";
import Link from "next/link";
import { ImgCatigory } from "../ImgCatigory";
import { CategortiesImgList } from "./ListColumn";
import { ImgMyTestKategory } from "../ImgMyTestKategory";
import { LinkStyle } from "@/ui/Button";

export const RenderImgCategory = () => {
  return (
    <CategortiesImgList>
      {catigoryImage &&
        catigoryImage.map((img: TItemSlider) => {
          return (
            <Link key={img.id} href={img.href} style={LinkStyle}>
              <ImgMyTestKategory key={img.id} image={img.image} title={img.title} />
            </Link>
          );
        })}
    </CategortiesImgList>
  );
};

import React from "react";
import { CategortiesList } from "../CategortiesList";
import { catigoryImage } from "@/utils/catigoryImg";
import { TItemSlider } from "@/types/Slider";
import Link from "next/link";
import { ImgCatigory } from "../ImgCatigory";

export const RenderImgCategory = () => {
  return (
    <CategortiesList>
      {catigoryImage &&
        catigoryImage.map((img: TItemSlider) => {
          return (
            <Link key={img.id} href={img.href}>
              <ImgCatigory key={img.id} image={img.image} />
            </Link>
          );
        })}
    </CategortiesList>
  );
};

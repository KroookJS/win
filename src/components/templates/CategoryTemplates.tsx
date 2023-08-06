import { TitleHot } from "@/layout/Layout";

import { ButtonCategoryPage } from "@/ui/Button";
import React, { FC, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";

import { ImgMyTestKategory } from "../Categories/ImgMyTestKategory";
import { ICategory, IModel } from "@/types/Catigories";
import { ListColumn } from "../Categories/RenderCategory/ListColumn";
import { TitleIconBlock } from "../TitleComp";

type TPropsCategory = {
  categories: ICategory[];
};

const CategoryTemplatesMem: FC<TPropsCategory> = ({ categories }) => {
  const [isActivePage, setIsActivePage] = useState(true);

  /*   const categoryRender = model ? (
    model.map((mod: IModel) => {
      return (
        <ImgMyTestKategory
          title={mod.model}
          image={mod.imageModelUrl}
          href={mod._id}
          isCategory={true}
        />
      );
    })
  ) : (
    <p>Loading....</p>
  ); */

  
  const modelRender = categories ? (
    categories.map((catigory: ICategory) => {
      return (
        <ImgMyTestKategory
          title={catigory.category}
          image={catigory.imageCategoryUrl}
          href={catigory._id}
          isCategory={true}
        />
      );
    })
  ) : (
    <p>Loading....</p>
  );
  return (
    <>
   {/*    <div style={{ display: "flex", gap: 13, padding: "0 10px" }}>
        <ButtonCategoryPage onClick={() => setIsActivePage(!isActivePage)}>
          {!isActivePage ? "Category" : "Models"}
        </ButtonCategoryPage>
        <ButtonCategoryPage onClick={() => setIsActivePage(!isActivePage)}>
          {isActivePage ? "Models" : "Category"}
        </ButtonCategoryPage>

      </div> */}

      <TitleIconBlock>
        <BiCategoryAlt />
        <TitleHot>{isActivePage ? "Category" : "Models"}</TitleHot>
      </TitleIconBlock>
      <ListColumn>{modelRender}</ListColumn>
    </>
  );
};

export const CategoryTemplates = React.memo(CategoryTemplatesMem)
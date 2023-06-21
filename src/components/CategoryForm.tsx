import React from "react";
import { SelecctReactCategory } from "./SelecctReactCategory";
import { SelecctReactModel } from "./SelecctReactModel";
import styled from "styled-components";
import { ButtonDelete, ButtonNext } from "@/ui/Button";

const Tilte = styled.h2`
  font-weight: 300;
  margi-bottom: 6px;
`;

export const CategoryForm = ({
  onSubmitVideoPriv,
  onSubmitVideoPrivResult,
}: {
  onSubmitVideoPriv: any;
  onSubmitVideoPrivResult: any;
}) => {
  return (
    <>
      <div>
        <Tilte>Выбирете Категории</Tilte>
        <SelecctReactCategory />

        <div style={{ margin: "20px 0", rowGap: 30 }}>
          <Tilte>Сгенирировать Гиф обязательно!</Tilte>
          {/* <SelecctReactModel /> */}
          <ButtonNext onClick={onSubmitVideoPriv}>подготовить Gif!</ButtonNext>
          <ButtonDelete onClick={onSubmitVideoPrivResult}>
            Сделать Gif!
          </ButtonDelete>
        </div>
      </div>
    </>
  );
};

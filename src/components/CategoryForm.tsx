import React from "react";
import { SelecctReactCategory } from "./SelecctReactCategory";
import { SelecctReactModel } from "./SelecctReactModel";
import styled from "styled-components";

const Tilte = styled.h2`
  font-weight: 300;
  margi-bottom: 6px;
`;

export const CategoryForm = () => {
  return (
    <>
      <div>
        <Tilte>Выбирете Категории</Tilte>
        <SelecctReactCategory />

        <div style={{ margin: "20px 0", rowGap: 30 }}>
          <Tilte>Выбирете Модель</Tilte>
          <SelecctReactModel />
        </div>
      </div>
    </>
  );
};

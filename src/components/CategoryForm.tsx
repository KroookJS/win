import React, { useContext } from "react";
import { SelecctReactCategory } from "./SelecctReactCategory";
import styled from "styled-components";
import { ButtonDelete, ButtonNext } from "@/ui/Button";
import { ICategory, IModel } from "@/types/Catigories";
import { CustomContext } from "@/contrex/TasksProvider";
import { getAllCategorys, getAllModel } from "@/api/categorys";
import { colourOptions } from "@/utils/dataCategory";

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
  const [categoryesServer, setCategoryesServer] = React.useState<ICategory[]>();
  const [modelServer, setModelServer] = React.useState<IModel[]>();
  const {setCategoryFile, setModelFile } =
    useContext(CustomContext);

  React.useEffect(() => {
    const resCatServer = async () => {
      return await getAllCategorys().then((res) => setCategoryesServer(res));
    };
    const resModServer = async () => {
      return await getAllModel().then((res) => setModelServer(res));
    };
    resCatServer();
    resModServer();
  }, []);

  const newArrCategory =
    categoryesServer || categoryesServer !== undefined
      ? categoryesServer.map((el: ICategory) => {
          return { value: el.category, label: el.category, id: el._id };
        })
      : colourOptions;

  const newArrModel =
    modelServer || modelServer !== undefined
      ? modelServer.map((el: IModel) => {
          return { value: el.model, label: el.model, id: el._id };
        })
      : colourOptions;
  return (
    <>
      <div>
        <Tilte>Выбирете Категории</Tilte>
        <SelecctReactCategory
          newArr={newArrCategory}
          setFile={setCategoryFile}
        />
        <Tilte>Выбирете Моель</Tilte>
        <SelecctReactCategory newArr={newArrModel} setFile={setModelFile} />

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

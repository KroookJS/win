import React, {  useContext } from "react";

import Select from "react-select";

import { getAllCategorys } from "@/api/categorys";
import { ICategory } from "@/types/Catigories";
import { CustomContext } from "@/contrex/TasksProvider";
import { colourOptions } from "@/utils/dataCategory";

export const SelecctReactCategory = () => {
  const [categoryesServer, setCategoryesServer] = React.useState<ICategory[]>();
  const { categoryFile, setCategoryFile } = useContext(CustomContext);

  React.useEffect(() => {
    const resCatServer = async () => {
      return await getAllCategorys().then((res) => setCategoryesServer(res));
    };
    resCatServer();
  }, []);

  const neArrCategory =
    categoryesServer || categoryesServer !== undefined
      ? categoryesServer.map((el: ICategory) => {
          return { value: el.category, label: el.category, id: el._id };
        })
      : colourOptions;

  return (
    <Select
      isMulti
      defaultValue={neArrCategory[0]}
      name="colors"
      options={neArrCategory}
      className="basic-multi-select"
      classNamePrefix="sdcscds"
      onChange={(e) => setCategoryFile(e)}
    />
  );
};

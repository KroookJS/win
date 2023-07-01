import React from "react";

import Select from "react-select";

import { getAllModels } from "@/api/model";
import { IModel } from "@/types/Catigories";
import { colourOptions } from "@/utils/dataCategory";

export const SelecctReactModel = () => {
  const [modelsServer, setModelsServer] = React.useState<IModel[]>();

  React.useEffect(() => {
    const resCatServer = async () => {
      return await getAllModels().then((res) => setModelsServer(res));
    };
    resCatServer();
  }, []);

  const neArrCategory =
    modelsServer || modelsServer !== undefined
      ? modelsServer.map((el: IModel) => {
          return { value: el.model, label: el.model, id: el._id };
        })
      : colourOptions;
  return (
    <Select
      isMulti
      name="colors"
      defaultValue={neArrCategory[0]}
      options={neArrCategory}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};

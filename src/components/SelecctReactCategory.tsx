import React from "react";

import Select from "react-select";

export const SelecctReactCategory = ({
  newArr,
  setFile,
}: {
  newArr: any;
  setFile: any;
}) => {
  return (
    <Select
      isMulti
      defaultValue={newArr[0]}
      name="colors"
      options={newArr}
      className="basic-multi-select"
      classNamePrefix="sdcscds"
      onChange={(e) => setFile(e)}
    />
  );
};

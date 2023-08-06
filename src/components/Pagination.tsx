import React from "react";
import { Pagination } from "antd";
import {
  ButtonCategoryPage,
  CustomButtonPaginationBack,
  CustomButtonPaginationNext,
} from "@/ui/Button";

type TProps = {
  curentPage?: number;
  total?: number;
  handlePaginationChange?: any;
  handlePaginationChangeBack?: any;
};
let isBack = true;

const PaginationNavigeteMem: React.FC<TProps> = ({
  curentPage,
  total,
  handlePaginationChange,
  handlePaginationChangeBack,
}) => (
  <>
    <div
      style={{
        display: "flex",
        gap: 50,
        padding: "0 20px",
        maxWidth: "80%",
        margin: "0 auto",
      }}
    >
      <CustomButtonPaginationBack onClick={handlePaginationChangeBack}>
        Back
      </CustomButtonPaginationBack>
      <CustomButtonPaginationNext onClick={() => handlePaginationChange()}>
        Next
      </CustomButtonPaginationNext>
    </div>
  </>
);
const PaginationNavigete = React.memo(PaginationNavigeteMem);
export default PaginationNavigete;

import { Pagination } from "@mui/material";
import { FC } from "react";

interface IPaginationProps {
  page: number;
  setPage: any;
  totalCount: number;
}
const PaginationBlock: FC<IPaginationProps> = ({
  totalCount,
  page,
  setPage,
}) => {
  return (
    <div>
      <Pagination
        count={totalCount}
        page={page}
        onChange={(_, num) => setPage(num)}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default PaginationBlock;

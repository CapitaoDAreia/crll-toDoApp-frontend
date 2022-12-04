import {
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import useBringData from "../../Hooks/useBringData";

const Table = () => {
  const URL = `http://localhost:3004/api/todos/`;

  const [response] = useBringData({ URL });

  return (
    <MuiTable>
      <TableHead>
        <TableRow></TableRow>
      </TableHead>
      <TableBody>
        <TableRow></TableRow>
      </TableBody>
    </MuiTable>
  );
};

export default Table;

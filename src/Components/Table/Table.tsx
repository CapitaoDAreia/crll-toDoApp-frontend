import {
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";

import useBringData from "../../Hooks/useBringData";

const StyledTable = styled(MuiTable)({
  width: '50%',
  padding: '15px 25px',
  marginTop: '20px',

  background: '#EEEEEE'
})

const Table = () => {

  const URL = `http://localhost:3004/api/todos/`;
  const [response] = useBringData({ URL });

  return (
    <StyledTable >
      <TableHead  >
        <TableRow>
          <TableCell >
            ID
          </TableCell>
          <TableCell >
            TASK
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          response.data.map((task: any, index: any)=>
          <TableRow key={index}>
            <TableCell>{task._id}</TableCell>
            <TableCell>{task.description}</TableCell>
          </TableRow>)
        }
      </TableBody>
    </StyledTable>
  );
};

export default Table;

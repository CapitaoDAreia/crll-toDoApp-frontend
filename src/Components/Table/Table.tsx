import {
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import { CheckIcon, TrashIcon, UnCheckIcon } from "../../Assets/SvgIcons";

import useBringData from "../../Hooks/useBringData";

const StyledTable = styled(MuiTable)({
  width: "50%",
  height: '300px',
  padding: "15px 25px",
  marginTop: "20px",

  background: "#EEEEEE",
  overflowY: 'scroll'
});

const StyledTableCell = styled(TableCell)({
  display: "flex",
  gap: "15px",
  justifyContent: "space-between",
});

const StyledButton = styled("button")({
  border: `1px solid black`,
  borderRadius: '50%',
  padding: '3px',
  display: "inline",
  '&: hover':{
    cursor: 'pointer'
  }
});

const StyledButtonsContainer = styled('div')({
  display: 'flex',
  gap: '10px'
})

const Table = () => {
  const URL = `http://localhost:3004/api/todos/`;
  const [response] = useBringData({ URL });
  console.log(response.data);

  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell><h2>TASKS</h2></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {response.data.map((task: any, index: any) => (
          <TableRow key={index}>
            <StyledTableCell
              style={task.done ? {textDecoration: 'line-through'}: {}}
            >
              {task.description}{" "}
              {task.done === false ? (
                <StyledButtonsContainer>
                  <StyledButton>
                    <CheckIcon />
                  </StyledButton>

                  <StyledButton>
                    <TrashIcon />
                  </StyledButton>
                </StyledButtonsContainer>
              ) : (
                <StyledButtonsContainer>
                  <StyledButton>
                    <UnCheckIcon />
                  </StyledButton>

                  <StyledButton>
                    <TrashIcon />
                  </StyledButton>
                </StyledButtonsContainer>
              )}
            </StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default Table;

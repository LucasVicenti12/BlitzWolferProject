import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Table
} from "@mui/material";

const CustomTable = ({ columns, content, name }) => {

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns?.map((column, index) => (
              <Tooltip title={column.label} placement="left">
                <TableCell
                  key={index}
                  sx={{
                    width: column.width,
                  }}
                >
                  {column.label}
                </TableCell>
              </Tooltip>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {content?.length > 0 ? (
            content?.map((node) => {
              return node;
            })
          ) : (
            <TableRow>
              <TableCell>There's no {name}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;

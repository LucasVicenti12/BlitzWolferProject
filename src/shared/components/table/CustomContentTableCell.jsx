import { TableCell } from "@mui/material";

const CustomContentTableCell = ({ width, content, align }) => {

    return (
        <TableCell
            sx={{
                maxWidth: width,
                overflowX: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
            }}
            align={align}
        >
            {content}
        </TableCell>
    );
};

export default CustomContentTableCell;
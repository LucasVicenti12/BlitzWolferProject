import {Box} from "@mui/joy";

const CustomPage = ({children}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxHeight: "93%",
                p: 2
            }}
        >
            {children}
        </Box>
    );
};

export default CustomPage;
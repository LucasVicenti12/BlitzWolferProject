import { Box } from "@mui/joy";

const CustomPage = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

export default CustomPage;

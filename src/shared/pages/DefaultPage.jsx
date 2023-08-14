import { Outlet } from "react-router-dom";
import { Box, useTheme } from "@mui/system";
import MenuSide from "../components/MenuSide";

const DefaultPage = () => {
  const theme = useTheme();

  document.querySelector("body").style.backgroundColor =
    theme?.palette?.background?.secondary ?? "";

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <MenuSide />
      <Box sx={{ display: "grid", width: "100%" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DefaultPage;

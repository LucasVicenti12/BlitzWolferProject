import { Outlet } from "react-router-dom";
import { Box, useTheme } from "@mui/system";
import MenuSide from "../components/MenuSide";
import AppBarDefault from "../components/AppBarDefault";

const DefaultPage = () => {
  const theme = useTheme();

  document.querySelector("body").style.backgroundColor =
    theme?.palette?.background?.secondary ?? "";

  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%", height: "100%" }}>
      <MenuSide />
      <Box sx={{ display: "column", width: "100%", height: "100%" }}>
        <AppBarDefault/>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DefaultPage;

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useThemeImplementation } from "../theme/useThemeImplementation";

const AppBarDefault = () => {
  const theme = useTheme();

  const themeFunction = useThemeImplementation();

  return (
    <AppBar position="sticky" elevation={0}>
      <Container
        maxWidth="100vw"
        sx={{ backgroundColor: theme.palette.background.primary }}
      >
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            sx={{
              fontSize: "17pt",
            }}
          >
            Welcome
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Tooltip title="Change theme">
              <IconButton
                onClick={themeFunction.toggleColorMode}
                color="primary"
                size="large"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon
                    style={{ color: theme.palette.text.primary }}
                  />
                ) : (
                  <Brightness4Icon
                    style={{ color: theme.palette.text.primary }}
                  />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarDefault;

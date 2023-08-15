import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Collapse, Tooltip, useTheme } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useEffect } from "react";

import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const drawerWidth = 225;

const MenuModules = [
  {
    icon: <LocalOfferOutlinedIcon fontSize="small" />,
    selectedIcon: <LocalOfferOutlinedIcon fontSize="small" color="primary" />,
    route: "",
    label: "Product",
    expanded: true,
    routes: [
      {
        icon: <CategoryOutlinedIcon fontSize="small" />,
        selectedIcon: <CategoryOutlinedIcon fontSize="small" color="primary" />,
        route: "/Product",
        label: "Product",
        routes: [],
        expanded: false,
      },
    ],
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const MenuSide = () => {
  const theme = useTheme();
  const locationURL = useLocation().pathname;
  const [open, setOpen] = useState(
    localStorage.getItem("drawerOpen") !== null
      ? JSON.parse(localStorage.getItem("drawerOpen"))
      : true
  );

  //   const appBarContext = useAppBarContext();

  useEffect(() => {
    localStorage.setItem("drawerOpen", open);
    for (let path of MenuModules) {
      if (path.route === locationURL && !path.expanded) {
        // appBarContext.handleChangeTitle(path.label);
      } else {
        for (let subPath of path.routes) {
          if (subPath.route === locationURL) {
            // appBarContext.handleChangeTitle(subPath.label);
          }
        }
      }
    }
  }, [open, locationURL]);

  const handleOpenMenuSide = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.primary,
            "&::-webkit-scrollbar": {
              width: 5,
              height: 7,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            },
          },
        }}
        sx={{
          "& .MuiDrawer-paper": {
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
            gridTemplateAreas: "'header' 'main' 'footer'",
          },

          maxHeight: 10,
        }}
      >
        <DrawerHeader
          sx={{
            gridArea: "header",
            display: "flex",
            justifyContent: open ? "space-between" : "center",
            alignItems: "center",
          }}
        >
          {open ? <Box sx={{ marginLeft: "10px", display: "flex" }}></Box> : ""}
          <IconButton onClick={() => handleOpenMenuSide()}>
            {open ? <SortOutlinedIcon /> : <MoreVertOutlinedIcon />}
          </IconButton>
        </DrawerHeader>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            borderRadius: "10px",
            maxHeight: "90vh",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: 5,
              height: 7,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            },
          }}
        >
          {MenuModules.map((module, index) => (
            <ModuleList key={index} module={module} isDrawerOpen={open} />
          ))}
        </List>
        {!open ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            <Tooltip title="Logout" placement="right">
              <IconButton>
                <ExitToAppOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        ) : (
          <ListItem key="logout" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "start",
                gap: 2,
                paddingTop: 2,
                paddingBottom: 2,
              }}
            >
              <ExitToAppOutlinedIcon color="action" />
              <Typography color="text.primary">Logout</Typography>
            </ListItemButton>
          </ListItem>
        )}
      </Drawer>
    </Box>
  );
};

const ModuleList = ({ module, isDrawerOpen }) => {
  const [openRoutes, setOpenRoutes] = useState(false);
  const selectedPage = useLocation().pathname;
  const navigate = useNavigate();

  const theme = useTheme();

  const handleNavigate = (route) => {
    if (route !== "") {
      navigate(route);
    }
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        p: 0,
        paddingTop: 0.5,
      }}
    >
      {!isDrawerOpen ? (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Tooltip title={module.label} placement="right">
            <IconButton
              onClick={() => {
                setOpenRoutes(!openRoutes);
                handleNavigate(module?.route ?? "");
              }}
            >
              {module.route === selectedPage
                ? module.selectedIcon
                : module.icon}
            </IconButton>
          </Tooltip>
          <Collapse in={openRoutes} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{ width: "100%", display: "flex", flexDirection: "column" }}
            >
              {module.routes.map((route, index) => (
                <ListItem sx={{ p: 0, paddingTop: 0.5 }} key={index}>
                  <Tooltip title={route.label} placement="right">
                    <IconButton
                      onClick={() => handleNavigate(route?.route ?? "")}
                    >
                      {route.route === selectedPage
                        ? route.selectedIcon
                        : route.icon}
                    </IconButton>
                  </Tooltip>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      ) : (
        <Box sx={{ width: "100%" }}>
          <ListItemButton
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              borderRadius: "15px",
              paddingTop: 0.5,
              paddingBottom: 0.5,
            }}
            selected={module.route === selectedPage ? true : false}
            onClick={() => {
              setOpenRoutes(!openRoutes);
              handleNavigate(module?.route ?? "");
            }}
          >
            <ListItemIcon>
              {module.expanded ? (
                openRoutes ? (
                  <ExpandLess fontSize="small" color="primary" />
                ) : (
                  <ExpandMore fontSize="small" color="primary" />
                )
              ) : module.route === selectedPage ? (
                module.selectedIcon
              ) : (
                module.icon
              )}
            </ListItemIcon>
            <ListItemText>
              {!isDrawerOpen ? (
                ""
              ) : (
                <Typography
                  sx={{ fontSize: "10pt" }}
                  color={
                    module.route === selectedPage ? "primary" : "text.primary"
                  }
                >
                  {module.label}
                </Typography>
              )}
            </ListItemText>
          </ListItemButton>
          <Collapse
            in={openRoutes}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%" }}
          >
            <List component="div" disablePadding sx={{ width: "100%" }}>
              {module.routes.map((route, index) => (
                <ListItem
                  sx={{ width: "100%", p: 0, paddingLeft: 2, paddingTop: 0.5 }}
                  key={index}
                >
                  <ListItemButton
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      borderRadius: "15px",
                      paddingRight: 0,
                      paddingTop: 0.5,
                      paddingBottom: 0.5,
                      border:
                        route.route === selectedPage ? "1px solid" : "none",
                      borderColor:
                        route.route === selectedPage
                          ? theme.palette.primary.main
                          : "none",
                    }}
                    selected={route.route === selectedPage ? true : false}
                    onClick={() => handleNavigate(route?.route ?? "")}
                  >
                    <ListItemIcon>
                      {route.route === selectedPage
                        ? route.selectedIcon
                        : route.icon}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        sx={{ fontSize: "10pt" }}
                        color={
                          route.route === selectedPage
                            ? "primary"
                            : "text.primary"
                        }
                      >
                        {route.label}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      )}
    </ListItem>
  );
};

export default MenuSide;

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Person,
  DirectionsCar,
  Business,
  Menu as MenuIcon,
} from "@mui/icons-material";

const Rough = () => {
  const [openUser, setOpenUser] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleUserClick = () => {
    setOpenUser(!openUser);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <IconButton onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            background: "linear-gradient(180deg, #4a90e2 0%, #ffffff 100%)",
          },
        }}
      >
        <List>
          <ListItem button onClick={handleUserClick}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="User Management" />
            {openUser ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openUser} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{ paddingLeft: "55px", listStyleType: "none" }}
            >
              <ListItem button>
                <ListItemText primary="Create User" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Maintain User" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <DirectionsCar />
            </ListItemIcon>
            <ListItemText primary="Vehicle Management" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Supplier Master" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Rough;

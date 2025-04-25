import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import {Link, useLocation} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Navbar(props) {
    const {drawerWidth, content} = props;
    const location = useLocation();
    const path = location.pathname;


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Django React Test Project
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>

          <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/" selected={path === "/"}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>
              
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/create" selected={path === "/create"}>
                  <ListItemIcon>
                    <AddBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Create"} />
                </ListItemButton>
              </ListItem>
              
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/read" selected={path === "/read"}>
                  <ListItemIcon>
                    <FormatListBulletedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Read"} />
                </ListItemButton>
              </ListItem>
              
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/update" selected={path === "/update"}>
                  <ListItemIcon>
                    <UpdateIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Update"} />
                </ListItemButton>
              </ListItem>
              
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/delete" selected={path === "/delete"}>
                  <ListItemIcon>
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Delete"} />
                </ListItemButton>
              </ListItem>
          </List>
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
            {content}

      </Box>
    </Box>
  );
}

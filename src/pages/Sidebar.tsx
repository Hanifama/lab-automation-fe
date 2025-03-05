import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Divider } from "@mui/material";
import { Map, Devices, History, Science, Logout } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Nanti bisa tambahkan logic clear session di sini
    navigate("/");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Biar menu di atas & logout di bawah
          paddingTop: 2,
        },
      }}
    >
      {/* Header: Icon + Nama */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Science sx={{ fontSize: 60, color: "primary.main" }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
          Lab Automation
        </Typography>
      </Box>

      {/* Menu Utama */}
      <List>
        <ListItem component={Link} to="/dashboard">
          <ListItemIcon>
            <Map />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={Link} to="/perangkat">
          <ListItemIcon>
            <Devices />
          </ListItemIcon>
          <ListItemText primary="Perangkat" />
        </ListItem>
        <ListItem component={Link} to="/riwayat">
          <ListItemIcon>
            <History />
          </ListItemIcon>
          <ListItemText primary="Riwayat" />
        </ListItem>
      </List>

      {/* Divider & Logout di bawah */}
      <Box sx={{ mt: "auto", mb: 2 }}>
        <Divider />
        <ListItem onClick={handleLogout} sx={{ mt: 1 }}>
          <ListItemIcon>
            <Logout color="error" />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: "error.main", fontWeight: "bold" }} />
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

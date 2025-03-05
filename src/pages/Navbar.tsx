import { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    // Data pengguna (bisa diambil dari state atau API nanti)
    const userName = "Alexander Jhondorr";
    const initial = userName.charAt(0).toUpperCase(); // Ambil huruf pertama dari nama

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (path: string) => {
        handleMenuClose();
        navigate(path);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - 240px)`,
                left: 240,
                backgroundColor: "white",
                color: "black",
                boxShadow: 1,
                px: 2, // Tambah padding horizontal
            }}
        >
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Lab Automation
                </Typography>

                {/* Nama & Icon Profil */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }} onClick={handleMenuOpen}>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32, fontSize: 14 }}>
                            {initial}
                        </Avatar>
                    </IconButton>
                    <Typography variant="body2" fontWeight="bold">
                        Hi, {userName}
                    </Typography>
                </Box>


                {/* Dropdown Menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={{
                        sx: { mt: 1, boxShadow: 3 },
                    }}
                >
                    <MenuItem onClick={() => handleNavigate("/profile")}>Profile</MenuItem>
                    <MenuItem onClick={() => handleNavigate("/")}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

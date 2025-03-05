import { Card, CardContent, Typography, Avatar, Box, Button, Divider } from "@mui/material";
import DashboardLayout from "./DashboardLayout";

const ProfilePage: React.FC = () => {
  return (
    <DashboardLayout>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: "bold" }}>
        Profil Pengguna
      </Typography>

      <Card sx={{ maxWidth: 600, mx: "auto", p: 3, boxShadow: 3, borderRadius: 2 }}>
        {/* Avatar & Nama */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{ width: 100, height: 100, bgcolor: "primary.main", fontSize: 36 }}
          >
            A
          </Avatar>
          <Typography variant="h5" fontWeight="bold">
            Alexander Johndorrrr
          </Typography>
        </Box>

        <CardContent>
          {/* Informasi Pengguna */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Typography variant="body1">
              <b>Email:</b> john.dorrrrrr@example.com
            </Typography>
            <Typography variant="body1">
              <b>Alamat:</b> Jl. Lingkar Selatan Keliling No. 10, Jakarta
            </Typography>
            <Typography variant="body1">
              <b>Role:</b> User
            </Typography>
            <Typography variant="body1">
              <b>Status Akun:</b> <span style={{ color: "green", fontWeight: "bold" }}>Aktif</span>
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />
        </CardContent>

        {/* Button Actions */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
          <Button variant="contained" color="primary">
            Edit Profil
          </Button>
          <Button variant="outlined" color="secondary">
            Ubah Password
          </Button>
        </Box>
      </Card>
    </DashboardLayout>
  );
};

export default ProfilePage;

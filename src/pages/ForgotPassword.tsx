import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material"; 
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password request for:", email);
    alert("Link reset password telah dikirim ke email Anda!");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "linear-gradient(135deg, #1e3c72 30%, #2a5298 100%)",
        px: 2,
      }}
    >
      <Card sx={{ maxWidth: 420, p: 4, boxShadow: 5, borderRadius: 3, textAlign: "left" }}>
        <Box sx={{ display: "flex", justifyContent: "left", mb: 2 }}>
          <LockResetIcon sx={{ fontSize: 50, color: "primary.main" }} />
        </Box>

        <Typography variant="h5" fontWeight="bold" mb={1}>
          Lupa Password?
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>
          Masukkan email yang terdaftar untuk mendapatkan link reset password.
        </Typography>

        {/* Form Reset Password */}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3 }}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              py: 1.5,
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: 2,
              textTransform: "none",
              transition: "0.3s",
              "&:hover": { bgcolor: "primary.dark", transform: "scale(1.02)" },
            }}
          >
            Kirim Link Reset
          </Button>
        </form>

        {/* Navigasi ke Login */}
        <Typography variant="body2" color="textSecondary" mt={3} textAlign="center">
          <Link
            onClick={() => navigate("/")}
            sx={{
              cursor: "pointer",
              color: "primary.main",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Kembali
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default ForgotPassword;

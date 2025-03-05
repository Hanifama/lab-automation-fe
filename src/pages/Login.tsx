import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, TextField, Typography, Link } from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science"; // Icon Lab Automation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/dashboard"); // Redirect ke Dashboard
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
          <ScienceIcon sx={{ fontSize: 50, color: "primary.main" }} />
        </Box>

        <Typography variant="h5" fontWeight="bold" mb={1}>
          Selamat Datang
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>
          Masuk ke akunmu dan kelola lab dengan mudah & cepat.
        </Typography>

        {/* Form Login */}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 1 }}
            required
          />
          {/* Link Lupa Password */}
          <Box sx={{ textAlign: "right", mb: 3 }}>
            <Link
              onClick={() => navigate("/forgot-password")}
              sx={{
                cursor: "pointer",
                color: "primary.main",
                fontWeight: "bold",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Lupa Password?
            </Link>
          </Box>
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
            Login Sekarang
          </Button>
        </form>

        {/* Copywriting Register */}
        <Typography variant="body2" color="textSecondary" mt={3} textAlign="center">
          Belum punya akun?{" "}
          <Link
            onClick={() => navigate("/register")}
            sx={{
              cursor: "pointer",
              color: "primary.main",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Register di sini
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default Login;

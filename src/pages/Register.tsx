import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, TextField, Typography, Link } from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Phone Number:", phoneNumber);
        navigate("/dashboard");
    };

    return (
        <Box
            className="h-screen flex items-center justify-center px-4"
        >
            <Card className="w-full max-w-md p-6 shadow-lg rounded-lg text-left">
                <Box className="flex justify-start">
                    <ScienceIcon className="text-blue-500" sx={{ fontSize: 50 }} />
                </Box>
                <Typography variant="h5" fontWeight="bold" mb={1}>
                    Daftar Akun Baru
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={3}>
                    Buat akunmu sekarang dan mulai kelola lab dengan mudah!
                </Typography>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <TextField
                        fullWidth
                        label="Nama Lengkap"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Nomor HP"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        sx={{ mb: 3 }}
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
                        Daftar Sekarang
                    </Button>
                </form>

                <Typography variant="body2" color="textSecondary" mt={3}>
                    Sudah punya akun? {" "}
                    <Link onClick={() => navigate("/")} className="text-blue-500 font-bold cursor-pointer hover:underline">
                        Login di sini
                    </Link>
                </Typography>
            </Card>
        </Box>
    );
};

export default Register;
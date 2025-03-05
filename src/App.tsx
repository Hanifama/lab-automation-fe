import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";
import PerangkatPage from "./pages/Device";
import RiwayatPage from "./pages/Riwayat";
import ProfilePage from "./pages/Profile";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/perangkat" element={<PerangkatPage />} />
        <Route path="/riwayat" element={<RiwayatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <Box sx={{ flexGrow: 1, ml: 0 }}>
        {/* Navbar */}
        <Navbar />

        {/* Konten Dinamis */}
        <Box sx={{ p: 3, pt: 10 }}>
          <Container>{children}</Container>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;

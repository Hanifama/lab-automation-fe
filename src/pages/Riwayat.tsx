import { useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
} from "@mui/material";
import DashboardLayout from "./DashboardLayout";
import image  from "../assets/131.jpg"

// Data dummy riwayat
const riwayatData = [
  {
    id: 112312312,
    tgl: "2024-03-05 10:30",
    idKamera: "Kamera-001",
    hasilCapture: image,
    value: "Generate AI",
  },
  {
    id: 21321321,
    tgl: "2024-03-05 11:00",
    idKamera: "Kamera-002",
    hasilCapture: image,
    value: "Generate AI",
  },
  {
    id: 31213111,
    tgl: "2024-03-05 11:30",
    idKamera: "Kamera-001",
    hasilCapture: image,
    value: "Generate AI",
  },
  {
    id: 42312432,
    tgl: "2024-03-05 12:00",
    idKamera: "Kamera-003",
    hasilCapture: image,
    value: "Generate AI",
  },
  {
    id: 51231231,
    tgl: "2024-03-05 12:30",
    idKamera: "Kamera-002",
    hasilCapture: image,
    value: "generate AI",
  },
  {
    id: 61232131,
    tgl: "2024-03-05 13:00",
    idKamera: "Kamera-001",
    hasilCapture: image,
    value: "9enerate ai",
  },
];

const RiwayatPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <DashboardLayout>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Riwayat Capture
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell><b>Tanggal</b></TableCell>
              <TableCell><b>ID Kamera</b></TableCell>
              <TableCell><b>Hasil Capture</b></TableCell>
              <TableCell><b>Value</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {riwayatData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (
              <TableRow key={data.id} hover>
                <TableCell>{data.tgl}</TableCell>
                <TableCell>{data.idKamera}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={data.hasilCapture} alt="Hasil Capture" style={{ width: 80, height: 50, borderRadius: 5 }} />
                  </Box>
                </TableCell>
                <TableCell>{data.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={riwayatData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </DashboardLayout>
  );
};

export default RiwayatPage;

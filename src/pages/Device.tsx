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
  IconButton,
} from "@mui/material";
import { Edit, Delete, Settings } from "@mui/icons-material";
import DashboardLayout from "./DashboardLayout";

// Data dummy perangkat
const perangkatData = [
  { id: 13213441, nama: "Sensor Suhu" },
  { id: 21341231, nama: "Sensor Kelembaban" },
  { id: 32331411, nama: "Controller Air" },
  { id: 43414121, nama: "Modul Relay" },
  { id: 51341211, nama: "Sensor Tekanan" },
  { id: 63141233, nama: "Motor Pompa" },
  { id: 71231311, nama: "Kipas Pendingin" },
  { id: 81231243, nama: "Lampu UV" },
];

const PerangkatPage: React.FC = () => {
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
        Perangkat
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell><b>ID</b></TableCell>
              <TableCell><b>Nama</b></TableCell>
              <TableCell align="center"><b>Aksi</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {perangkatData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((perangkat) => (
              <TableRow key={perangkat.id} hover>
                <TableCell>{perangkat.id}</TableCell>
                <TableCell>{perangkat.nama}</TableCell>
                <TableCell align="center">
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                  <IconButton color="secondary">
                    <Settings />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={perangkatData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </DashboardLayout>
  );
};

export default PerangkatPage;

import React from "react";
import UserRow from "./UserRow";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  CircularProgress,
  Box,
  Typography
} from "@mui/material";
import { useUsers } from "../../hooks/useAllUserData";


const UsersPage: React.FC = () => {
  const { data: users, isLoading, isError } = useUsers();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <Typography color="error">خطا در دریافت اطلاعات کاربران</Typography>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="جدول کاربران">
          <TableHead sx={{ bgcolor: 'grey.100' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', width: '250px' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '310px' }}>نام</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '310px' }}>ایمیل</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '100px' }}>ادمین</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '100px' }}>عملیات</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.length > 0 ? (
              users.map((user) => (
                <UserRow key={user._id} user={user} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                  <Typography variant="body1">هیچ کاربری یافت نشد</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersPage;
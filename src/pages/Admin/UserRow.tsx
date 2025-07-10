import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  IconButton,
  TextField,
  Tooltip,
  Box,
} from "@mui/material";
import { Edit, Check, Delete } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import type { User } from "../../types/User";
import { useEditeUser } from "../../hooks/useEditeUsers";
import { useDeleteUser } from "../../hooks/useDeleteUser";

const UserRow: React.FC<{ user: User }> = ({ user }) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [editedName, setEditedName] = useState(user.username);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const updateUserMutation = useEditeUser();
  const deleteUserMutation = useDeleteUser();

  const handleSave = async () => {
    try {
      await updateUserMutation.mutateAsync({
        _id: user._id,
        userData: { username: editedName, email: editedEmail },
      });
      setIsEditingName(false);
      setIsEditingEmail(false);
    } catch (error) {
      // Error is handled in the mutation hook
      console.log(error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUserMutation.mutateAsync(user._id);
      } catch (error) {
        // Error is handled in the mutation hook
        console.log(error);
      }
    }
  };

  // Reset fields when editing is canceled
  const cancelEditing = () => {
    setEditedName(user.username);
    setEditedEmail(user.email);
    setIsEditingName(false);
    setIsEditingEmail(false);
  };

  return (
    <TableRow hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {/* ID */}
      <TableCell sx={{ width: "250px" }}>{user._id}</TableCell>

      {/* Name */}
      <TableCell sx={{ width: "310px" }}>
        <Box display="flex" alignItems="center">
          {isEditingName ? (
            <Box display="flex" alignItems="center" gap={1}>
              <TextField
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                size="small"
                autoFocus
                disabled={updateUserMutation.isPending}
              />
              <Tooltip title="ذخیره">
                <IconButton
                  color="success"
                  onClick={handleSave}
                  disabled={updateUserMutation.isPending}
                >
                  <Check />
                </IconButton>
              </Tooltip>
              <Tooltip title="لغو">
                <IconButton
                  color="error"
                  onClick={cancelEditing}
                  disabled={updateUserMutation.isPending}
                >
                  <CancelIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          ) : (
            <Box display="flex" alignItems="center" gap={1}>
              {user.username}
              <Tooltip title="ویرایش نام">
                <IconButton
                  size="small"
                  onClick={() => setIsEditingName(true)}
                  disabled={
                    updateUserMutation.isPending || deleteUserMutation.isPending
                  }
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Box>
      </TableCell>

      {/* Email */}
      <TableCell sx={{ width: "310px" }}>
        <Box display="flex" alignItems="center">
          {isEditingEmail ? (
            <Box display="flex" alignItems="center" gap={1}>
              <TextField
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                size="small"
                autoFocus
                disabled={updateUserMutation.isPending}
              />
              <Tooltip title="ذخیره">
                <IconButton
                  color="success"
                  onClick={handleSave}
                  disabled={updateUserMutation.isPending}
                >
                  <Check />
                </IconButton>
              </Tooltip>
              <Tooltip title="لغو">
                <IconButton
                  color="error"
                  onClick={cancelEditing}
                  disabled={updateUserMutation.isPending}
                >
                  <CancelIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          ) : (
            <Box display="flex" alignItems="center" gap={1}>
              {user.email}
              <Tooltip title="ویرایش ایمیل">
                <IconButton
                  size="small"
                  onClick={() => setIsEditingEmail(true)}
                  disabled={
                    updateUserMutation.isPending || deleteUserMutation.isPending
                  }
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Box>
      </TableCell>

      {/* Admin Status */}
      <TableCell sx={{ width: "100px" }}>
        {user.isAdmin ? "✅" : "❌"}
      </TableCell>

      {/* Actions */}
      <TableCell sx={{ width: "100px" }}>
        <Tooltip title="حذف کاربر">
          <IconButton
            color="error"
            onClick={handleDelete}
            disabled={
              deleteUserMutation.isPending || updateUserMutation.isPending
            }
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;

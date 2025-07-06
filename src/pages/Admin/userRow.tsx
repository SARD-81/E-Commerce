import React, { useState } from "react";
import { Pencil, Check, Trash2 } from "lucide-react";
import { updateUser, deleteUser } from "../../api/userService";


interface User {
  id: string;
  name: string;
  email: string;
  is_admin: boolean;
}


const UserRow: React.FC<{ user: User; refresh: () => void }> = ({ user, refresh }) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleSave = async () => {
    await updateUser(user.id, { name: editedName, email: editedEmail });
    setIsEditingName(false);
    setIsEditingEmail(false);
    refresh(); // refetch data
  };

  const handleDelete = async () => {
    await deleteUser(user.id);
    refresh();
  };

  return (
    <tr className="text-sm border-b hover:bg-gray-50">
      <td className="py-2 px-4">{user.id}</td>

      {/* Name */}
      <td className="py-2 px-4 flex items-center gap-2">
        {isEditingName ? (
          <>
            <input value={editedName} onChange={e => setEditedName(e.target.value)} />
            <Check className="cursor-pointer text-green-500" onClick={handleSave} />
          </>
        ) : (
          <>
            {user.name}
            <Pencil className="cursor-pointer" onClick={() => setIsEditingName(true)} />
          </>
        )}
      </td>

      {/* Email */}
      <td className="py-2 px-4 flex items-center gap-2">
        {isEditingEmail ? (
          <>
            <input value={editedEmail} onChange={e => setEditedEmail(e.target.value)} />
            <Check className="cursor-pointer text-green-500" onClick={handleSave} />
          </>
        ) : (
          <>
            {user.email}
            <Pencil className="cursor-pointer" onClick={() => setIsEditingEmail(true)} />
          </>
        )}
      </td>

      {/* Admin Status */}
      <td className="py-2 px-4">
        {user.is_admin ? "✔️" : "❌"}
      </td>

      {/* Actions */}
      <td className="py-2 px-4">
        <Trash2 className="cursor-pointer text-red-500" onClick={handleDelete} />
      </td>
    </tr>
  );
};

export default UserRow;

import AdminMenu from "../../components/AdminMenu"
import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Check, X } from "lucide-react"; 
import getUserData from '../../api/userService.ts';


 interface User {
  id: string;
  name: string;
  email: string;
  is_admin: boolean;
}



const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUserData();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-gray-200 text-sm">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">نام</th>
            <th className="py-2 px-4">ایمیل</th>
            <th className="py-2 px-4">ادمین</th>
            <th className="py-2 px-4">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-sm border-b hover:bg-gray-50">
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4 flex items-center gap-2">
                {user.email}
                <Pencil size={14} className="cursor-pointer text-gray-500 hover:text-blue-500" />
              </td>
              <td className="py-2 px-4">
                {user.is_admin ? (
                  <Check className="text-green-500" />
                ) : (
                  <X className="text-red-500" />
                )}
              </td>
              <td className="py-2 px-4">
                <Trash2 className="text-red-500 cursor-pointer hover:text-red-700" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;


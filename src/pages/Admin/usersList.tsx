import React, { useEffect, useState } from "react";
import { getUserData } from "../../api/userService";
import UserRow from "./userRow";


 interface User {
  id: string;
  name: string;
  email: string;
  is_admin: boolean;
}


const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const data = await getUserData();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="text-sm border-b-[1px] border-[#CED2D7] pb-4 flex justify-between">
            <th className="w-[250px]">ID</th>
            <th className="w-[310px]">نام</th>
            <th className="w-[310px]">ایمیل</th>
            <th className="w-[100px]">ادمین</th>
            <th className="w-[100px]">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user.id} user={user} refresh={fetchUsers} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;

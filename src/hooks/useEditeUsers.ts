import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../api/userService';
import type { User } from "../types/User";
import { toast } from 'react-toastify';


export const useEditeUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ _id, userData }: { _id: string; userData: Partial<User> }) => 
      updateUser(_id, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('User updated successfully!');
    },
    onError: (error: Error) => {
      toast.error(`Failed to update user: ${error.message}`);
    }
  });
};
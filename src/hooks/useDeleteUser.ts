import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../api/userService';
import { toast } from 'react-toastify';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (_id: string) => deleteUser(_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('User deleted successfully!');
    },
    onError: (error: Error) => {
      toast.error(`Failed to delete user: ${error.message}`);
    }
  });
};
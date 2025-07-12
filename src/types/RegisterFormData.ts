interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirm_Password: string;
}

interface RegisterResponseData {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

export type { RegisterFormData, RegisterResponseData };

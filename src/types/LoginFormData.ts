interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponseData {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

export type { LoginFormData, LoginResponseData };

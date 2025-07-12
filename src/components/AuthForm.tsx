import useLogin from "../hooks/useLogin";
import useRegister from "../hooks/useRegister";
import type { AuthMode } from "../pages/AuthPage";
import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import { Button, TextField, Box, Stack, CircularProgress } from "@mui/material";

interface IAuthFormProps {
  mode: AuthMode;
}

const AuthForm: React.FC<IAuthFormProps> = ({ mode }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm_Password: "",
  });
  
  const { mutate: loginMutate, status: loginStatus } = useLogin();
  const { mutate: registerMutate, status: registerStatus } = useRegister();
  
  const isLoading = loginStatus === "pending" || registerStatus === "pending";

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (mode === "register") {
      const { username, email, password, confirm_Password } = formValues;
      
      if (!username.trim() || !email.trim() || !password.trim() || !confirm_Password.trim()) {
        toast.warning("لطفا تمامی فیلدها را پر کنید!");
        return;
      }
      
      if (password !== confirm_Password) {
        toast.error("رمز عبور و تکرار آن مطابقت ندارند!");
        return;
      }
      
      registerMutate({ username, email, password, confirm_Password });
    } else {
      const { email, password } = formValues;

      if (!email.trim() || !password.trim()) {
        toast.warning("لطفا تمامی فیلدها را پر کنید!");
        return;
      }
      
      loginMutate({ email, password });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ my: 4 }}>
      <Stack spacing={3}>
        {mode === "register" && (
          <TextField
            label="نام"
            id="name"
            type="text"
            placeholder="نام خود را وارد نمایید"
            value={formValues.username}
            onChange={(e) =>
              setFormValues({ ...formValues, username: e.target.value })
            }
            fullWidth
            required
          />
        )}
        
        <TextField
          label="ایمیل"
          id="email"
          type="email"
          placeholder="ایمیل خود را وارد نمایید"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          fullWidth
          required
        />
        
        <TextField
          label="رمز عبور"
          id="password"
          type="password"
          placeholder="رمز عبور خود را وارد نمایید"
          value={formValues.password}
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
          fullWidth
          required
        />
        
        {mode === "register" && (
          <TextField
            label="تکرار رمز عبور"
            id="repeat-password"
            type="password"
            placeholder="رمز عبور خود را دوباره وارد نمایید"
            value={formValues.confirm_Password}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                confirm_Password: e.target.value,
              })
            }
            fullWidth
            required
          />
        )}
        
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={isLoading}
          sx={{ 
            py: 1.5,
            mt: 1,
            "&.Mui-disabled": { 
              backgroundColor: "primary.light",
              color: "common.white"
            }
          }}
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : mode === "login" ? (
            "ورود"
          ) : (
            "ثبت نام"
          )}
        </Button>
      </Stack>
    </Box>
  );
};

export default AuthForm;
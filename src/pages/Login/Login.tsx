import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import loginBackground from "../../../public/images/loginBackGround.png";
import "../../assets/fonts/font.css";
import { useNavigate } from "react-router-dom";
import { useLogin, useAuthLoading } from "../../state-management/stores/useAuthStore";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const login = useLogin();
  const loading = useAuthLoading();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("لطفاً ایمیل و رمزعبور خود را وارد کنید");
      return;
    }

    try {
      const user = await login(form.email, form.password);
      
      // Redirect based on admin status
      if (user?.isAdmin) {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch {
      // Error handled in store
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: { xs: "column", md: "row-reverse" },
        }}
      >
        {/* Image section */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: { md: "60%" },
            backgroundImage: `url(${loginBackground})`,
            backgroundColor: "#f5f5f5",
            backgroundSize: "cover",
            backgroundPosition: "center",
            ml: 4,
            my: 2,
            borderRadius: 1.5,
          }}
        />

        {/* Form section */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            p: 2,
            maxHeight: "100vh",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="sm">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                sx={{
                  mb: 3,
                  width: "100%",
                  textAlign: "right",
                  fontWeight: 500,
                  fontSize: "24px",
                  fontFamily: "vazir",
                }}
              >
                ورود
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: "100%" }}>
                {/* Email */}
                <Typography
                  variant="body1"
                  component="label"
                  htmlFor="email"
                  sx={{ fontFamily: "vazir", textAlign: "right", fontWeight: 400, fontSize: "16px" }}
                >
                  ایمیل
                </Typography>
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ایمیل خود را وارد نمایید"
                  fullWidth
                  required
                  autoComplete="email"
                  autoFocus
                  inputProps={{
                    sx: {
                      "::placeholder": {
                        fontWeight: 400,
                        fontSize: "16px",
                        fontFamily: "Vazir, Arial, sans-serif",
                        color: "#58616C",
                      },
                    },
                  }}
                  InputProps={{
                    sx: {
                      backgroundColor: "#FFFFFF",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      "&.Mui-focused": { borderColor: "#000" },
                      "& fieldset": { border: "none" },
                    },
                  }}
                  margin="normal"
                  sx={{
                    "& .MuiInputBase-root": { height: 38 },
                    "& input": { padding: "6px 8px", fontSize: "0.9rem", textAlign: "right" },
                  }}
                />

                {/* Password */}
                <Typography
                  variant="body1"
                  component="label"
                  htmlFor="password"
                  sx={{ fontFamily: "vazir", textAlign: "right", fontWeight: 400, fontSize: "16px", mt: 1.5 }}
                >
                  رمزعبور
                </Typography>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="رمزعبور خود را وارد نمایید"
                  fullWidth
                  required
                  autoComplete="current-password"
                  inputProps={{
                    sx: {
                      "::placeholder": {
                        fontWeight: 400,
                        fontSize: "16px",
                        fontFamily: "Vazir, Arial, sans-serif",
                        color: "#58616C",
                      },
                    },
                  }}
                  InputProps={{
                    sx: {
                      backgroundColor: "#FFFFFF",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      "&.Mui-focused": { borderColor: "#000" },
                      "& fieldset": { border: "none" },
                    },
                  }}
                  margin="normal"
                  sx={{
                    "& .MuiInputBase-root": { height: 38 },
                    "& input": { padding: "6px 8px", fontSize: "0.9rem", textAlign: "right" },
                  }}
                />

                {/* Submit */}
                <Box sx={{ width: "100%", textAlign: "right", mt: 3, mb: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    className={`w-[12.5%] py-1 rounded-lg shadow-none bg-[#DB2777] whitespace-nowrap hover:bg-[#BE1D64]`}
                  >
                    {loading ? "در حال ورود" : "ورود"}
                  </Button>
                </Box>

                <Typography
                  variant="body2"
                  sx={{ textAlign: "right", fontWeight: 400, fontSize: "16px", fontFamily: "vazir" }}
                >
                  عضو نیستید ؟{" "}
                  <Button
                    onClick={() => navigate("/register")}
                    sx={{
                      color: "#DB2777",
                      "&:hover": { color: "#BE1D64", backgroundColor: "transparent" },
                      textTransform: "none",
                      p: 0,
                      minWidth: "unset",
                      fontWeight: "400",
                      fontSize: "16px",
                      fontFamily: "vazir",
                    }}
                  >
                    ثبت نام
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Login;
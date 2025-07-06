import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginBackground from "../../../public/images/loginBackGround.png";
import "../../assets/fonts/font.css";
import useAuthStore from "../../state-management/stores/useAuthStore";
import type { ApiResponse } from "../../types/ApiResponse";
import type {
  LoginFormData,
  LoginResponseData,
} from "../../types/LoginFormData";
import server from "../../utils/axios";

const Login: React.FC = () => {
  const { setId, setIsAdmin, setFlashMessage } = useAuthStore();
  const navigate = useNavigate();
  const [LoginResponse, setLoginResponse] = useState<
    ApiResponse<LoginResponseData>
  >({
    loading: false,
    data: null,
    error: null,
  });
  const [LoginForm, setLoginForm] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!LoginForm.email || !LoginForm.password) {
      toast.error("لطفاً ایمیل و رمزعبور خود را وارد کنید");
      return;
    }

    setLoginResponse({
      loading: true,
      data: null,
      error: null,
    });

    try {
      const response = await server.post<LoginResponseData>(
        "users/auth",
        LoginForm
      );

      setLoginResponse({ loading: false, data: response.data, error: null });

      if (response.status === 200) {
        const { _id, isAdmin } = response.data;
        setId(_id);
        setIsAdmin(isAdmin);
        setFlashMessage("ثبت‌نام با موفقیت انجام شد 🎉");
        navigate("/products", { replace: true });
        setLoginForm({ email: "", password: "" });
      }
    } catch (error) {
      setLoginResponse({
        loading: false,
        data: null,
        error: error.response?.data?.message || "خطا در ورود به سیستم",
      });

      if (error.response?.status === 401) {
        toast.error("ایمیل یا رمز عبور اشتباه است. لطفاً دوباره تلاش کنید.");
      } else {
        toast.error("خطا در ورود به سیستم. لطفاً دوباره تلاش کنید.");
      }
    }
  };

  return (
    <>
      <CssBaseline />
      {/* Main container */}
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
                  fontWeight: "500",
                  fontSize: "24px",
                  fontFamily: "vazir",
                }}
              >
                ورود
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 1, width: "100%" }}
              >
                {/* Email label */}
                <Box
                  sx={{
                    mb: -1.25,
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="label"
                    htmlFor="email"
                    sx={{
                      fontFamily: "vazir",
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                  >
                    ایمیل
                  </Typography>
                </Box>

                {/* Email input */}
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  value={LoginForm.email}
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
                      "&.Mui-focused": {
                        borderColor: "#000",
                      },
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                  margin="normal"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 38,
                    },
                    "& input": {
                      padding: "6px 8px",
                      fontSize: "0.9rem",
                      textAlign: "right",
                    },
                  }}
                />

                {/* Password label */}
                <Box
                  sx={{
                    mb: -1.25,
                    width: "100%",
                    textAlign: "right",
                    mt: 1.5,
                  }}
                >
                  <Typography
                    variant="body1"
                    component="label"
                    htmlFor="password"
                    sx={{
                      fontFamily: "vazir",
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                  >
                    رمزعبور
                  </Typography>
                </Box>

                {/* Password input */}
                <TextField
                  id="password"
                  name="password"
                  value={LoginForm.password}
                  type="password"
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
                      "&.Mui-focused": {
                        borderColor: "#000",
                      },
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                  margin="normal"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 38,
                    },
                    "& input": {
                      padding: "6px 8px",
                      fontSize: "0.9rem",
                      textAlign: "right",
                    },
                  }}
                />

                {/* Submit button */}
                <Box sx={{ width: "100%", textAlign: "right", mt: 3, mb: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={LoginResponse.loading}
                    className={`${
                      LoginResponse.loading ? "w-[100px]" : ""
                    } w-[12.5%] py-1 rounded-lg shadow-none bg-[#DB2777] whitespace-nowrap hover:bg-[#BE1D64]`}
                  >
                    {LoginResponse.loading ? "در حال ورود" : "ورود"}
                  </Button>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "right",
                    fontWeight: "400",
                    fontSize: "16px",
                    fontFamily: "vazir",
                  }}
                >
                  عضو نیستید ؟{" "}
                  <Button
                    onClick={() => navigate("/register")}
                    sx={{
                      color: "#DB2777",
                      "&:hover": {
                        color: "#BE1D64",
                        backgroundColor: "transparent",
                      },
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

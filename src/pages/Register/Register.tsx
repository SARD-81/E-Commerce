import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CssBaseline,
} from "@mui/material";
import loginBackground from "../../../public/images/loginBackGround.png";
import "../../assets/fonts/font.css";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register form submitted");
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
              {/* Title */}
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
                ثبت نام
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 1, width: "100%", textAlign: "right" }}
              >
                {/* Name label */}
                <Box sx={{ mb: -1.25, width: "100%" }}>
                  <Typography
                    variant="body1"
                    component="label"
                    htmlFor="name"
                    sx={{
                      fontFamily: "vazir",
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                  >
                    نام
                  </Typography>
                </Box>

                {/* Name input */}
                <TextField
                  id="name"
                  name="name"
                  placeholder="نام خود را وارد نمایید"
                  fullWidth
                  required
                  autoComplete="name"
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

                {/* Email label */}
                <Box sx={{ mb: -1.25, width: "100%" }}>
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
                  id="email"
                  name="email"
                  placeholder="ایمیل خود را وارد نمایید"
                  fullWidth
                  required
                  autoComplete="email"
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
                  sx={{ mb: -1.25, width: "100%", textAlign: "right", mt: 1.5 }}
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
                  type="password"
                  placeholder="رمزعبور خود را وارد نمایید"
                  fullWidth
                  required
                  autoComplete="new-password"
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

                {/* Confirm Password label */}
                <Box
                  sx={{ mb: -1.25, width: "100%", textAlign: "right", mt: 1.5 }}
                >
                  <Typography
                    variant="body1"
                    component="label"
                    htmlFor="confirmPassword"
                    sx={{
                      fontFamily: "vazir",
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                  >
                    تکرار رمزعبور
                  </Typography>
                </Box>

                {/* Confirm Password input */}
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="رمزعبور خود را دوباره وارد نمایید"
                  fullWidth
                  required
                  autoComplete="new-password"
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
                    sx={{
                      width: "18%",
                      py: 1.1,
                      borderRadius: "8px",
                      boxShadow: "none",
                      bgcolor: "#DB2777",
                      fontFamily: "vazir",
                      "&:hover": {
                        bgcolor: "#BE1D64",
                      },
                    }}
                  >
                    ثبت نام
                  </Button>
                </Box>

                {/* Bottom text */}
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "right",
                    fontWeight: "400",
                    fontSize: "16px",
                    fontFamily: "vazir",
                  }}
                >
                  عضو هستید ؟{" "}
                  <Button
                    onClick={() => navigate("/login")}
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
                    ورود
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

export default Register;

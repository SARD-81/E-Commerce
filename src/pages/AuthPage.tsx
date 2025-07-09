import AuthForm from "../components/AuthForm";
import { Button, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import authLight from "../assets/images/auth-light.png";
import authDark from "../assets/images/auth-dark.png";

export type AuthMode = "login" | "register";

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<AuthMode>(
    () => (searchParams.get("mode") as AuthMode) || "login",
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setMode(searchParams.get("mode") as AuthMode);
  }, [searchParams]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" },
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        minHeight: "100vh",
        p: 3,
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      {/* Image Section */}
      <Box sx={{ 
        flex: 2, 
        display: "flex", 
        justifyContent: "center",
        maxWidth: { md: "50%" },
        mb: { xs: 4, md: 0 }
      }}>
        <img 
          src={theme.palette.mode === "light" ? authLight : authDark} 
          alt="Authentication illustration" 
          style={{ 
            maxWidth: "100%", 
            height: "auto",
            maxHeight: isMobile ? "200px" : "400px",
            objectFit: "contain"
          }} 
        />
      </Box>

      {/* Form Section */}
      <Box sx={{ 
        flex: 1, 
        maxWidth: { md: "400px" },
        width: "100%"
      }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ fontWeight: 700, textAlign: "center" }}
        >
          {mode === "login" ? "ورود" : "ثبت نام"}
        </Typography>

        <AuthForm mode={mode} />

        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          gap: 1,
          mt: 3
        }}>
          <Typography variant="body2">
            {mode === "login" ? "عضو نیستید؟" : "عضو هستید؟"}
          </Typography>
          <Button
            variant="text"
            size="small"
            sx={{ 
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: theme.typography.body2.fontSize
            }}
            onClick={() => {
              setSearchParams(`mode=${mode === "login" ? "register" : "login"}`);
            }}
          >
            {mode === "login" ? "ثبت نام" : "ورود"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthPage;
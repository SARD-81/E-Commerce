import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import useUpdateUser from "../../hooks/useUpdateUser";

type ProfileInputValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type InputKey = keyof ProfileInputValues;

const inputs: {
  label: string;
  placeholder: string;
  key: InputKey;
}[] = [
  { label: "نام", placeholder: "نام خود را وارد نمایید", key: "name" },
  {
    label: "ایمیل",
    placeholder: "ایمیل خود را وارد نمایید",
    key: "email",
  },
  {
    label: "رمزعبور",
    placeholder: "رمزعبور خود را وارد نمایید",
    key: "password",
  },
  {
    label: "تکرار رمزعبور",
    placeholder: "تکرار رمزعبور خود را وارد نمایید",
    key: "confirmPassword",
  },
];

const ProfileForm = () => {
  const [profileInput, setProfileInput] = useState<ProfileInputValues>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const updateProfileMutation = useUpdateUser();

  const handleChangeInputs = (value: string, key: InputKey) => {
    const tempInputValues = { ...profileInput };
    tempInputValues[key] = value;
    setProfileInput(tempInputValues);
  };

  return (
    <Box
      sx={{
        maxWidth: 640,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        margin: "0 auto",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          textAlign: "right",
        }}
      >
        بروزرسانی پروفایل
      </Typography>

      {/* Inputs */}
      {inputs.map((field) => (
        <Box key={field.key}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              textAlign: "right",
              mb: "8px",
            }}
          >
            {field.label}
          </Typography>
          <TextField
            fullWidth
            placeholder={field.placeholder}
            variant="outlined"
            value={profileInput[field.key]}
            onChange={(e) => handleChangeInputs(e.target.value, field.key)}
            type={
              field.key === "password" || field.key === "confirmPassword"
                ? "password"
                : "text"
            }
            InputProps={{
              sx: {
                height: "42px",
                borderRadius: "8px",
                paddingTop: "10px",
                paddingBottom: "11px",
                paddingLeft: "9px",
                paddingRight: "9px",
                backgroundColor: "#fff",
              },
              classes: {
                notchedOutline: "custom-outline",
              },
            }}
            sx={{
              "& .custom-outline": {
                border: "1px solid #CED2D7",
              },
              "& .MuiOutlinedInput-root:hover .custom-outline": {
                border: "1px solid #CED2D7",
              },
              "& .MuiOutlinedInput-root.Mui-focused .custom-outline": {
                border: "1px solid #A1A6AD",
              },
              "& input::placeholder": {
                fontSize: "16px",
                fontWeight: 400,
                color: "#58616C",
                textAlign: "right",
              },
              input: {
                textAlign: "right",
              },
            }}
          />
        </Box>
      ))}

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "8px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: 102,
            height: 36,
            borderRadius: "8px",
            px: "12px",
            py: "8px",
            backgroundColor: "#DB2777",
            fontSize: "14px",
            fontWeight: 500,
            ":hover": {
              backgroundColor: "#c41f6d",
            },
          }}
        >
          سفارشات من
        </Button>
        <Button
          variant="contained"
          sx={{
            width: 81,
            height: 36,
            borderRadius: "8px",
            px: "12px",
            py: "8px",
            backgroundColor: "#DB2777",
            fontSize: "14px",
            fontWeight: 500,
            ":hover": {
              backgroundColor: "#c41f6d",
            },
          }}
          onClick={() =>
            updateProfileMutation.mutate({
              ...profileInput,
              userId: "6867b74de700e7d8beb7c56a",
            })
          }
        >
          بروزرسانی
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;

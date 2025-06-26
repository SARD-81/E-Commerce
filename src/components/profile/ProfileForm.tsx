import { Box, Typography, TextField, Button } from "@mui/material";

const ProfileForm = () => {
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
      {[
        { label: "نام", placeholder: "نام خود را وارد نمایید" },
        { label: "ایمیل", placeholder: "ایمیل خود را وارد نمایید" },
        { label: "رمزعبور", placeholder: "رمزعبور خود را وارد نمایید" },
        {
          label: "تکرار رمزعبور",
          placeholder: "تکرار رمزعبور خود را وارد نمایید",
        },
      ].map((field, index) => (
        <Box key={index}>
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
        >
          بروزرسانی
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;

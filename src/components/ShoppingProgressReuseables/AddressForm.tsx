import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";

export interface IAddressData {
  address: string;
  city: string;
  country: string;
  postal: string;
}

interface IAddressFormProps {
  data: IAddressData;
  onChange: (field: keyof IAddressData, value: string) => void;
  payment: string;
  onPaymentChange: (value: string) => void;
  onNext: () => void;
}

const AddressForm: React.FC<IAddressFormProps> = ({
  data,
  onChange,
  payment,
  onPaymentChange,
  onNext,
}) => {
  // error handling
  const [errors, setErrors] = useState<Record<keyof IAddressData, string>>({
    address: "",
    city: "",
    country: "",
    postal: "",
  });

  // Validate form fields
  const validateForm = () => {
    const newErrors = {
      address: "",
      city: "",
      country: "",
      postal: "",
    };

    let isValid = true;

    // Check required fields to not be empty
    if (!data.address.trim()) {
      newErrors.address = "آدرس الزامی است";
      isValid = false;
    }

    if (!data.city.trim()) {
      newErrors.city = "شهر الزامی است";
      isValid = false;
    }

    if (!data.country.trim()) {
      newErrors.country = "کشور الزامی است";
      isValid = false;
    }

    // Validate postal code to just be number
    if (!data.postal.trim()) {
      newErrors.postal = "کدپستی الزامی است";
      isValid = false;
    } else if (!/^\d+$/.test(data.postal)) {
      newErrors.postal = "کدپستی باید فقط شامل عدد باشد";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleFieldChange = (field: keyof IAddressData, value: string) => {
    if (field === "postal") {
      if (value === "" || /^\d+$/.test(value)) {
        onChange(field, value);
      }
    } else {
      onChange(field, value);
    }

    if (errors[field] && value.trim()) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Box
      sx={{
        textAlign: "right",
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" align="right">
        خرید
      </Typography>
      {(["address", "city", "country", "postal"] as const).map(
        (field, labelIdx) => {
          const labels = ["آدرس", "شهر", "کشور", "کدپستی"];
          const placeholders = [
            "آدرس را وارد نمایید",
            "شهر را وارد نمایید",
            "کشور را وارد نمایید",
            "کدپستی را وارد نمایید",
          ];

          return (
            <TextField
              sx={{
                textAlign: "right",
                "& label": {
                  marginLeft: "87%",
                },
                "& legend": {
                  marginLeft: "90%",
                },
              }}
              key={field}
              label={labels[labelIdx]}
              name={field}
              placeholder={placeholders[labelIdx]}
              value={data[field]}
              onChange={(e) => handleFieldChange(field, e.target.value)}
              error={Boolean(errors[field])}
              helperText={errors[field]}
              fullWidth
              inputProps={
                field === "postal"
                  ? { inputMode: "numeric", pattern: "[0-9]*" }
                  : {}
              }
            />
          );
        }
      )}

      <Box>
        <Typography>روش پرداخت</Typography>
        <RadioGroup
          sx={{
            "&.MuiRadioGroup-root": {
              margin: 0,
            },
          }}
          value={payment}
          onChange={(e) => onPaymentChange(e.target.value)}
        >
          <FormControlLabel
            value="pasargad"
            control={<Radio />}
            label="درگاه پرداخت پاسارگاد"
          />
        </RadioGroup>
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{ height: 48, borderRadius: "100px" }}
        onClick={handleSubmit}
      >
        ادامه
      </Button>
    </Box>
  );
};

export default AddressForm;

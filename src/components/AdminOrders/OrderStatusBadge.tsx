import { Box } from "@mui/material";

type StatusType = "sent" | "being_sent" | "not_sent";
type PaymentType = "paid" | "unpaid";

interface BadgeProps {
  status: StatusType | PaymentType;
  type: "shipping" | "payment";
}

const shippingColors: Record<StatusType, string> = {
  sent: "#22C55E",
  being_sent: "#00B8D9",
  not_sent: "#B71D18",
};

const paymentColors: Record<PaymentType, string> = {
  paid: "#22C55E",
  unpaid: "#B71D18",
};

const shippingLabels: Record<StatusType, string> = {
  sent: "ارسال شده",
  being_sent: "در حال ارسال",
  not_sent: "ارسال نشده",
};

const paymentLabels: Record<PaymentType, string> = {
  paid: "پرداخت شده",
  unpaid: "پرداخت نشده",
};

const OrderStatusBadge = ({ status, type }: BadgeProps) => {
  const backgroundColor =
    type === "shipping"
      ? shippingColors[status as StatusType]
      : paymentColors[status as PaymentType];

  const label =
    type === "shipping"
      ? shippingLabels[status as StatusType]
      : paymentLabels[status as PaymentType];

  return (
    <Box
      sx={{
        backgroundColor,
        color: "white",
        borderRadius: "12px",
        px: "8px",
        py: "2px",
        fontSize: 14,
        display: "inline-block",
        minWidth: "80px",
        textAlign: "center",
      }}
    >
      {label}
    </Box>
  );
};

export default OrderStatusBadge;

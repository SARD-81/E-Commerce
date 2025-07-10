import React, { useState } from "react";
import StepperHeader from "../../components/ShoppingProgressReuseables/StepperHeader";
import AddressForm from "../../components/ShoppingProgressReuseables/AddressForm";
import { type IAddressData } from "../../components/ShoppingProgressReuseables/AddressForm";
import Summary from "../../components/ShoppingProgressReuseables/Summary";
import { useCartStore } from "../../state-management/stores/useCartStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ShoppingProgress: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const [step, setStep] = useState(1);
  const [addressData, setAddressData] = useState<IAddressData>({
    address: "",
    city: "",
    country: "",
    postal: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("pasargad");

  const handleNext = () => setStep(2);

  const handleFieldChange = (field: keyof IAddressData, value: string) => {
    setAddressData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    toast.success('سفارش شما با موفقیت ثبت شد!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      rtl: true,
    });
    
    // Clear cart after successful order
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 4000);
  };

  // Map cart items to IProduct format
  const products = items.map(item => ({
    name: item.name,
    image: item.image,
    price: item.price,
    quantity: item.quantity
  }));

  return (
    <>
      <StepperHeader activeStep={step} />

      {step === 1 && (
        <AddressForm
          data={addressData}
          onChange={handleFieldChange}
          payment={paymentMethod}
          onPaymentChange={setPaymentMethod}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <Summary
          products={products}
          addressData={addressData}
          paymentMethod={paymentMethod}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </>
  );
};

export default ShoppingProgress;
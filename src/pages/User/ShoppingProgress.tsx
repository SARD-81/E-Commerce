import React, { useState } from "react";
import StepperHeader from "../../components/ShoppingProgressReuseables/StepperHeader";
import AddressForm from "../../components/ShoppingProgressReuseables/AddressForm";
import { type IAddressData } from "../../components/ShoppingProgressReuseables/AddressForm";
import Summary from "../../components/ShoppingProgressReuseables/Summary";
import { useCartStore } from "../../state-management/stores/useCartStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCheckoutStore from "../../state-management/stores/useCheckoutStore";

const ShoppingProgress: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const checkoutStore = useCheckoutStore();
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(2);

  const handleFieldChange = (field: keyof IAddressData, value: string) => {
    checkoutStore.setAddressInfo({
      ...checkoutStore.addressInfo,
      [field]: value,
    });
  };

  const handlePlaceOrder = () => {
    toast.success("سفارش شما با موفقیت ثبت شد!", {
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
      navigate("/");
    }, 4000);
  };

  // Map cart items to IProduct format
  const products = items.map((item) => ({
    name: item.name,
    image: item.image,
    price: item.price,
    quantity: item.quantity,
  }));

  return (
    <>
      <StepperHeader activeStep={step} />

      {step === 1 && (
        <AddressForm
          data={checkoutStore.addressInfo}
          onChange={handleFieldChange}
          payment={checkoutStore.paymentMethod}
          onPaymentChange={checkoutStore.setPaymentMethod}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <Summary
          products={products}
          addressData={checkoutStore.addressInfo}
          paymentMethod={checkoutStore.paymentMethod}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </>
  );
};

export default ShoppingProgress;

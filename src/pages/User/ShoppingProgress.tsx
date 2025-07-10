import React, { useState } from "react";
import StepperHeader from "../../components/ShoppingProgressReuseables/StepperHeader";
import AddressForm from "../../components/ShoppingProgressReuseables/AddressForm";
import { type IAddressData } from "../../components/ShoppingProgressReuseables/AddressForm";
import { type IProduct } from "../../components/ShoppingProgressReuseables/Summary";
import Summary from "../../components/ShoppingProgressReuseables/Summary";
import useCheckoutStore from "../../state-management/stores/useCheckoutStore";

const ShoppingProgress: React.FC = () => {
  const checkoutStore = useCheckoutStore();
  const [step, setStep] = useState(1);

  const products: IProduct[] = [
    {
      name: "Apple iPhone 14 Pro",
      image: "/images/iphone14pro.jpg",
      price: 999,
      quantity: 1,
    },
    {
      name: "Apple MacBook Air M2",
      image: "/images/macbookAirM2.jpg",
      price: 999,
      quantity: 1,
    },
    {
      name: "Apple iPad Pro 12.9-inch",
      image: "/images/ipadPro12.jpg",
      price: 999,
      quantity: 1,
    },
  ];

  const handleNext = () => setStep(2);

  const handleFieldChange = (field: keyof IAddressData, value: string) => {
    checkoutStore.setAddressInfo({
      ...checkoutStore.addressInfo,
      [field]: value,
    });
  };

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
        />
      )}
    </>
  );
};

export default ShoppingProgress;

import React, { useState } from "react";
import StepperHeader from "../../components/ShoppingProgressReuseables/StepperHeader";
import AddressForm from "../../components/ShoppingProgressReuseables/AddressForm";
import { type IAddressData } from "../../components/ShoppingProgressReuseables/AddressForm";
import { type IProduct } from "../../components/ShoppingProgressReuseables/Summary";
import Summary from "../../components/ShoppingProgressReuseables/Summary";

const ShoppingProgress: React.FC = () => {
  const [step, setStep] = useState(1);
  const [addressData, setAddressData] = useState<IAddressData>({
    address: "",
    city: "",
    country: "",
    postal: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("pasargad");

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
    setAddressData((prev) => ({ ...prev, [field]: value }));
  };

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
        />
      )}
    </>
  );
};

export default ShoppingProgress;

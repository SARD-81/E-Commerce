import { create } from "zustand";
import type { IAddressData } from "../../components/ShoppingProgressReuseables/AddressForm";

type CheckoutStoreStateType = {
  orderId: string | null;
  addressInfo: IAddressData;
  paymentMethod: string;
  setOrderId: (orderId: string) => void;
  setAddressInfo: (addressInfo: IAddressData) => void;
  setPaymentMethod: (paymentMethod: string) => void;
  returnOrderId: () => string | null;
  returnAddress: () => IAddressData;
  returnPaymentMethod: () => string;
};

const useCheckoutStore = create<CheckoutStoreStateType>()((set, get) => ({
  orderId: null,
  addressInfo: {
    address: "",
    city: "",
    country: "",
    postal: "",
  },
  paymentMethod: "",
  setOrderId: (id: string) => {
    set((state: CheckoutStoreStateType) => ({
      ...state,
      orderId: id,
    }));
  },
  setAddressInfo: (address: IAddressData) => {
    set((state: CheckoutStoreStateType) => ({
      ...state,
      addressInfo: address,
    }));
  },
  setPaymentMethod: (method: string) => {
    set((state: CheckoutStoreStateType) => ({
      ...state,
      paymentMethod: method,
    }));
  },
  returnOrderId: () => {
    const orderId = get().orderId;
    return orderId;
  },
  returnAddress: () => {
    const address = get().addressInfo;
    return address;
  },
  returnPaymentMethod: () => {
    const paymentMethod = get().paymentMethod;
    return paymentMethod;
  },
}));

export default useCheckoutStore;

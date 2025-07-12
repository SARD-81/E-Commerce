export interface OrderItem {
    _id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
  }
  
  export interface Order {
    _id: string;
    orderItems: OrderItem[];
    shippingAddress: {
      address: string;
      city: string;
      postalCode: string;
      country: string;
    };
    paymentMethod: string;
    totalPrice: number;
    isPaid: boolean;
    isDelivered: boolean;
    createdAt: string;
    shippingStatus: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  }
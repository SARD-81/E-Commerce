export interface Product {
  _id: string;
  name: string;
  image: string;
  quantity: number;
  category: {
    _id: string;
    name: string;
    __v: number;
  };
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: {
    name: string;
    rating: number;
    comment: string;
    user: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

import type { CategoryType } from "./Category";

export interface ProductType {
  _id: string;
  name: string;
  image: string;
  quantity: number;
  category: CategoryType;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

import type { CategoryType } from "./Category";
import type { ApiResponse } from "./ApiResponse";
interface ProductResponseType {
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

type ProductType = ApiResponse<ProductResponseType[]>;

export type { ProductType, ProductResponseType };

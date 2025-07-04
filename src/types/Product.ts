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

interface CreateProductFormResponse {
  name: string;
  image: string;
  quantity: number;
  category: string;
  description: string;
  rating: number;
  numReview: number;
  price: number;
  countInStock: number;
  _id: string;
  reviews: [];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type { ProductType, ProductResponseType, CreateProductFormResponse };

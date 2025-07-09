import type { CategoryType } from "./Category";
import type { ApiResponse } from "./ApiResponse";

interface Review {
  name: string;
  rating: number;
  comment: string;
  user: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}


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
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

type ProductType = ApiResponse<ProductResponseType[]>;

type CreateProductPayload = {
  name: string;
  description: string;
  price: number;
  brand: string;
  quantity: number;
  image: string;
};

export type { ProductType, ProductResponseType, CreateProductPayload, Review , Product};

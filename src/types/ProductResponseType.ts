import type { ProductType } from "./Product";

export default interface ProductResponseType {
  loading: boolean;
  data: ProductType[];
  error: string | null;
}

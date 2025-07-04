export interface ApiResponse<T> {
  loading: boolean;
  data: T | null;
  error: string | null;
}

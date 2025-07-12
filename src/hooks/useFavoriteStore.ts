import { create } from "zustand";
import type { ProductResponseType } from "../types/Product";

interface FavoriteStore {
  favorites: ProductResponseType[];
  addFavorite: (product: ProductResponseType) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (product: ProductResponseType) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorites: [],
  addFavorite: (product) =>
    set((state) => ({
      favorites: [...state.favorites, product],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item._id !== id),
    })),
  toggleFavorite: (product) => {
    const exists = get().favorites.some((item) => item._id === product._id);
    if (exists) {
      get().removeFavorite(product._id);
    } else {
      get().addFavorite(product);
    }
  },
}));

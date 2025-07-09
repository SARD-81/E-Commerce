import { create } from "zustand";
import { dividerClasses } from "@mui/material";
import type { Product } from "../types/Product";


interface FavoriteStore {
    favorites: Product[];
    addFavorite: (product: Product) => void;
    removeFavorite: (id: string) => void;
    toggleFavorite: (product: Product) => void;
}


export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorites: [],
  addFavorite: (product) =>
    set((state) => ({
      favorites: [...state.favorites, product],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),
  toggleFavorite: (product) => {
    const exists = get().favorites.some((item) => item.id === product.id);
    if (exists) {
      get().removeFavorite(product.id);
    } else {
      get().addFavorite(product);
    }
  },
}));
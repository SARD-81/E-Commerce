import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProductResponseType } from '../../types/Product';

// Use ProductResponseType directly instead of extending
interface CartState {
  items: Array<ProductResponseType & { quantity: number }>;
  addItem: (product: ProductResponseType) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) => {
        set((state) => {
          const existingItem = state.items.find(item => item._id === product._id);
          if (existingItem) {
            return {
              items: state.items.map(item => 
                item._id === product._id 
                  ? { ...item, quantity: item.quantity + 1 } 
                  : item
              )
            };
          } else {
            return { items: [...state.items, { ...product, quantity: 1 }] };
          }
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item._id !== productId)
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) return;
        set((state) => ({
          items: state.items.map(item => 
            item._id === productId 
              ? { ...item, quantity } 
              : item
          )
        }));
      },
      clearCart: () => {
        set({ items: [] });
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);
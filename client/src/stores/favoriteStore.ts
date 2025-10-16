import { FavoriteActionsType, FavoriteStoreStateType } from '@/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useFavoriteStore = create<FavoriteStoreStateType & FavoriteActionsType>()(
  persist((set) => ({
    favorites: [],
    hasHydrated: false,
    addToFavorite: (product) => set((state) => {
      const favId = `${product.id}-${Date.now()}`;
      return {
        favorites: [
          ...state.favorites,
          { ...product, favId },
        ],
      };
    }),
    removeFromFavorite: (product) => set((state) => ({
      favorites: state.favorites.filter((item) => item.favId !== product.favId),
    })),
    // Update item in favorites with new selectedSize and selectedColor
    updateFavoriteItem: (favId, type, newOption) => set((state) => {
  // Find the item to update
    const itemToUpdate = state.favorites.find((item) => item.favId === favId);

    if (itemToUpdate) {
      // Create an updated version of the favorites array immutably
      const updatedFavoriteItems = state.favorites.map((item) =>
        item.favId === favId
          ? {
              ...item,
              // Conditionally update selectedSize or selectedColor based on the type
              ...(type === "selectedSize"
                ? { selectedSize: newOption }
                : { selectedColor: newOption }),
            }
          : item
      );

      return { favorites: updatedFavoriteItems };
    }
    return state; // Return the current state if the item is not found
    }),
    clearFavorite: () => set({favorites: [] })
  }),
  {
    name: "favorites",
    storage: createJSONStorage(() => localStorage),
    onRehydrateStorage: () => (state) => {
      if(state) {
        state.hasHydrated = true;  
      }
    }
  })
);

export default useFavoriteStore;
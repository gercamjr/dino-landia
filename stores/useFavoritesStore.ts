import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[]; // array of dinosaur slugs
  addFavorite: (slug: string) => void;
  removeFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  toggleFavorite: (slug: string) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      
      addFavorite: (slug) => {
        const current = get().favorites;
        if (!current.includes(slug)) {
          set({ favorites: [...current, slug] });
        }
      },
      
      removeFavorite: (slug) => {
        set((state) => ({
          favorites: state.favorites.filter((s) => s !== slug),
        }));
      },
      
      isFavorite: (slug) => {
        return get().favorites.includes(slug);
      },
      
      toggleFavorite: (slug) => {
        const isFav = get().isFavorite(slug);
        if (isFav) {
          get().removeFavorite(slug);
        } else {
          get().addFavorite(slug);
        }
      },
    }),
    {
      name: 'dino-favorites', // localStorage key
    }
  )
);

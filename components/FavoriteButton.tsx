"use client";

import { useFavoritesStore } from "@/stores/useFavoritesStore";
import { toast } from "sonner";

interface FavoriteButtonProps {
  slug: string;
  size?: "sm" | "md";
}

export function FavoriteButton({ slug, size = "md" }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const favorited = isFavorite(slug);

  const sizeClasses = size === "sm" 
    ? "px-3 py-1.5 text-sm" 
    : "px-5 py-2.5 text-base";

  const handleClick = () => {
    toggleFavorite(slug);
    
    if (!favorited) {
      toast.success("Added to your collection!", {
        description: "You can find it in My Collection",
        duration: 2000,
      });
    } else {
      toast.info("Removed from your collection");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 rounded-full transition-all ${sizeClasses} ${
        favorited 
          ? "bg-red-100 text-red-600 hover:bg-red-200" 
          : "bg-[#F4EDE3] text-[#4A4038] hover:bg-[#EDE6D9]"
      }`}
    >
      <span>{favorited ? "❤️" : "🤍"}</span>
      <span className="font-medium">
        {favorited ? "Saved" : "Save to Collection"}
      </span>
    </button>
  );
}

"use client"

import useFavoriteStore from "@/stores/favoriteStore";
import { Heart } from "lucide-react";
import Link from "next/link";

const FavoriteIcon = () => {
  const { favorites, hasHydrated } = useFavoriteStore();
  
  if(!hasHydrated) return null;
  return (
    <Link href='/favorites' className='relative'>
        <Heart className="w-4 h-4 text-gray-600" />
        <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
          {favorites.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
    </Link>
  )
}

export default FavoriteIcon;
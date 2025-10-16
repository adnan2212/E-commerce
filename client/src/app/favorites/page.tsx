"use client"

import useCartStore from "@/stores/cartStore";
import useFavoriteStore from "@/stores/favoriteStore";
import { ProductType } from "@/types";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const FavoritesPage = ({ 
  item, 
  selectedSize, 
  selectedColor 
} : {
  item: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  
  const { addToCart } = useCartStore();
  const { favorites, addToFavorite, removeFromFavorite, updateFavoriteItem, clearFavorite  } = useFavoriteStore();

  const handleAddToCart = (item: any) => {
     addToCart(item);
     removeFromFavorite(item);
     toast.success('Added to cart!')
  }

  const removeFromFavoriteItems = (item: any) => {(
    removeFromFavorite(item))
  }

  const handleSelectChange = (favId: string | number, type: "selectedSize" | "selectedColor", value: string) => {
    updateFavoriteItem(favId, type, value);
  };

  const handleRemoveAllItems = () => {
    clearFavorite();
  }

  if(favorites.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl text-gray-600 mb-4 mt-4">Your favorite list is empty.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="font-semibold text-gray-500">Your Favaorites Items!</h2>
      <div className="flex flex-col items-center justify-center">
        {/* FAVORITES item DETAIL */}
        {favorites.map(item => (
          <div className="" key={item.favId}>
            <div className="flex flex-col md:flex-row">
              <Link href={`/products/${item.id}`}>
                <div className="relative w-75 h-75 m-4">
                  <Image 
                    src={item.images[item.selectedColor]}
                    alt={item.name} 
                    fill 
                    className='object-contain hover:scale-105 transition-all duration-300'
                  />
                </div>
              </Link>
              <div className="flex flex-col gap-3 p-4">
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-gray-500">{item.shortDescription}</span>
                <span className="">₹{item.price.toLocaleString("en-IN")}</span>
                <div className="flex flex-row gap-6 text-xs">
                  {/* SIZE SELECTION */}
                  <div className='flex flex-col gap-1'>
                    <span className='text-gray-500 text-xs'>Size</span>
                    <select
                      name="size"
                      id="size"
                      className="ring ring-gray-300 rounded-md px-2 py-1 w-15"
                      value={item.selectedSize}
                      onChange={(e) => {
                        if (item.favId !== undefined) {
                          handleSelectChange(item.favId, "selectedSize", e.target.value)
                        }}
                      }
                    >
                      {item.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* COLORS SELECTION*/}
                  <div className='flex flex-col gap-1'>
                    <span className='text-gray-500'>Color</span>
                    <div className='flex items-center gap-2'>
                      {item.colors.map(color => (
                        <div 
                          key={color} 
                          className={`cursor-pointer border-1 ${item.selectedColor === color ? 'border-gray-400' : 'border-gray-200'} rounded-full p-[1.2px]`}
                          onClick={() => {
                            if (item.favId !== undefined) {
                              handleSelectChange(item.favId, "selectedColor", color)
                            }
                          }}
                        >
                          <div 
                            className='w-[14px] h-[14px] rounded-full' 
                            style={{ backgroundColor: color }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>  
                {/* BUTTONS */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-3">
                  <button 
                    className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 text-sm font-medium cursor-pointer w-full"
                    onClick={() => handleAddToCart(item) }
                  >
                    <ShoppingCart className="w-4 mr-2"/>
                    Add to cart
                  </button>
                  <button 
                    className="ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center gap-2 text-sm font-medium cursor-pointer w-full"
                    onClick={() => removeFromFavoriteItems(item)}
                  >
                    <Heart className="w-4 mr-2" />
                    Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* REMOVE ALL ITEMS FROM FAVORITES */}
      {
        favorites.length > 0 &&
          <div className="flex justify-end mt-4 mr-4">
            <button 
              className="ring-1 ring-red-200 bg-red-600 text-white shadow-lg rounded-md px-4 py-2 text-sm cursor-pointer hover:bg-red-700 hover:ring-red-300 transition-all duration-300 flex items-center gap-2"
              onClick={handleRemoveAllItems}
            >
              <Trash2 className="text-white" />
              <span>Remove All</span>
            </button>
          </div>
      }
    </>
  )
}

export default FavoritesPage;
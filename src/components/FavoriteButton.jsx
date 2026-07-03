"use client";

import { useEffect, useState } from "react";

export default function FavoriteButton({ productId }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorite(favorites.includes(productId));
  }, [productId]);

  function toggleFavorite() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(productId)) {
      favorites = favorites.filter((id) => id !== productId);
      setFavorite(false);
    } else {
      favorites.push(productId);
      setFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  return (
    <button
      onClick={toggleFavorite}
      className={`mt-6 px-5 py-2 rounded text-white transition ${
        favorite
          ? "bg-red-500 hover:bg-red-600"
          : "bg-gray-700 hover:bg-gray-800"
      }`}
    >
      {favorite ? "❤️ Favorited" : "🤍 Add to Favorite"}
    </button>
  );
}

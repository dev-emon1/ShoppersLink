"use client";
import { useState, useEffect, useCallback } from "react";

export const useWishlistSession = () => {
  const [wishlist, setWishlist] = useState([]);

  // 🧩 Load from sessionStorage
  useEffect(() => {
    try {
      const stored = JSON.parse(sessionStorage.getItem("wishlist")) || [];
      setWishlist(stored);
    } catch {
      setWishlist([]);
    }

    const handleWishlistUpdate = () => {
      try {
        const updated = JSON.parse(sessionStorage.getItem("wishlist")) || [];
        setWishlist(updated);
      } catch {
        setWishlist([]);
      }
    };

    window.addEventListener("wishlistUpdated", handleWishlistUpdate);
    return () =>
      window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
  }, []);

  // 🧩 Save
  const saveWishlist = useCallback((data) => {
    sessionStorage.setItem("wishlist", JSON.stringify(data));
    window.dispatchEvent(new Event("wishlistUpdated"));
  }, []);

  // ➕ Add
  const addToWishlist = useCallback(
    (product) => {
      setWishlist((prev) => {
        if (prev.some((item) => item.id === product.id)) return prev;
        const updated = [...prev, product];
        saveWishlist(updated);
        return updated;
      });
    },
    [saveWishlist]
  );

  // ❌ Remove
  const removeFromWishlist = useCallback(
    (id) => {
      setWishlist((prev) => {
        const updated = prev.filter((item) => item.id !== id);
        saveWishlist(updated);
        return updated;
      });
    },
    [saveWishlist]
  );

  // ❤️ Toggle
  const toggleWishlist = useCallback(
    (product) => {
      setWishlist((prev) => {
        const exists = prev.some((i) => i.id === product.id);
        const updated = exists
          ? prev.filter((i) => i.id !== product.id)
          : [...prev, product];
        saveWishlist(updated);
        return updated;
      });
    },
    [saveWishlist]
  );

  // 🔍 Check
  const isInWishlist = useCallback(
    (id) => wishlist.some((i) => i.id === id),
    [wishlist]
  );

  // 🧹 Clear
  const clearWishlist = useCallback(() => {
    sessionStorage.removeItem("wishlist");
    setWishlist([]);
    window.dispatchEvent(new Event("wishlistUpdated"));
  }, []);

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
  };
};

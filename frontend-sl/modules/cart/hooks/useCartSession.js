"use client";
import { useEffect, useState, useMemo } from "react";

export const useCartSession = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    try {
      const storedCart = JSON.parse(sessionStorage.getItem("cart")) || {};
      setCart(storedCart);
    } catch {
      setCart({});
    }

    const handleCartUpdate = () => {
      setTimeout(() => {
        try {
          const updatedCart = JSON.parse(sessionStorage.getItem("cart")) || {};
          setCart(updatedCart);
        } catch {
          setCart({});
        }
      }, 0);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const { totalItems, totalPrice } = useMemo(() => {
    let items = 0;
    let price = 0;
    Object.keys(cart || {}).forEach((vendorId) => {
      const vendor = cart[vendorId];
      if (vendor?.items?.length) {
        vendor.items.forEach((i) => {
          items += i.quantity;
          price += i.price * i.quantity;
        });
      }
    });
    return { totalItems: items, totalPrice: price };
  }, [cart]);

  const addItem = (vendorId, vendorName, product) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (!updated[vendorId]) {
        updated[vendorId] = { vendorName, items: [] };
      }

      const vendor = updated[vendorId];
      const existing = vendor.items.find((i) => i.id === product.id);

      if (existing) {
        const stock = product.stock || 10;
        existing.quantity = Math.min(existing.quantity + 1, stock);
      } else {
        vendor.items.push({ ...product, quantity: 1 });
      }

      sessionStorage.setItem("cart", JSON.stringify(updated));
      window.dispatchEvent(new Event("cartUpdated"));
      return updated;
    });
  };

  const changeQuantity = (vendorId, productId, type) => {
    setCart((prev) => {
      const updated = { ...prev };
      const vendor = updated[vendorId];
      if (!vendor) return prev;

      const item = vendor.items.find((i) => i.id === productId);
      if (!item) return prev;

      const stock = item.stock || 10;
      if (type === "increase" && item.quantity < stock) item.quantity += 1;
      if (type === "decrease" && item.quantity > 1) item.quantity -= 1;

      sessionStorage.setItem("cart", JSON.stringify(updated));
      window.dispatchEvent(new Event("cartUpdated"));
      return updated;
    });
  };

  const removeItem = (vendorId, productId) => {
    setCart((prev) => {
      const updated = { ...prev };
      const vendor = updated[vendorId];
      if (!vendor) return prev;

      vendor.items = vendor.items.filter((i) => i.id !== productId);
      if (vendor.items.length === 0) delete updated[vendorId];

      sessionStorage.setItem("cart", JSON.stringify(updated));
      window.dispatchEvent(new Event("cartUpdated"));
      return updated;
    });
  };

  const clearCart = () => {
    setCart({});
    sessionStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return {
    cart,
    totalItems,
    totalPrice,
    addItem,
    changeQuantity,
    removeItem,
    clearCart,
  };
};

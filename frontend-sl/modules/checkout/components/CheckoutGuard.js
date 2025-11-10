"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const CheckoutGuard = ({ children }) => {
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    try {
      const cart = JSON.parse(sessionStorage.getItem("cart")) || {};
      const hasItems = Object.values(cart).some(
        (v) => (v.items || []).length > 0
      );
      setAllow(hasItems);
    } catch {
      setAllow(false);
    }
  }, []);

  if (!allow) {
    return (
      <div className="container py-16 text-center">
        <p className="text-textSecondary mb-2">Your cart is empty.</p>
        <Link href="/" className="text-main underline">
          Continue shopping →
        </Link>
      </div>
    );
  }
  return children;
};
export default CheckoutGuard;

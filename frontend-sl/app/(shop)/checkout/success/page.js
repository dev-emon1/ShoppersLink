"use client";

import { useEffect, useState } from "react";
import { generateInvoice } from "@/modules/checkout/utils/generateInvoice";
import InvoicePreview from "@/modules/checkout/components/InvoicePreview";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const CheckoutSuccessPage = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const newOrder = {
      id: "INV-" + Date.now(),
      date: new Date().toLocaleString(),
      customer: {
        name: "Shahariar Emon",
        phone: "01700000000",
        address: "Mirpur, Dhaka",
      },
      items: [
        {
          name: "Walton Prelude N50 Laptop (Bangladesh Edition)",
          quantity: 1,
          price: 49990,
        },
      ],
      subtotal: 49990,
      shipping: 60,
      total: 50050,
      paymentMethod: "bKash",
      status: "paid",
    };
    setOrder(newOrder);
  }, []);

  const handleDownload = () => {
    if (!order) return;
    try {
      generateInvoice(order);
    } catch (err) {
      console.error("❌ Failed to generate invoice:", err);
      alert("Invoice generation failed. Please try again.");
    }
  };

  if (!order)
    return (
      <section className="container py-16 text-center">
        <p className="text-gray-600">Generating your invoice...</p>
      </section>
    );

  return (
    <section className="container py-16 min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <CheckCircle className="text-green-500 mx-auto" size={64} />
        <h1 className="text-3xl font-bold text-green-600 mt-4">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600 mt-2">
          Thank you for shopping with{" "}
          <span className="font-semibold">ShoppersLink</span>. Your order has
          been placed and an invoice is ready.
        </p>
      </div>

      {/* Invoice Preview */}
      <div className="max-w-3xl mx-auto bg-white border border-border rounded-xl shadow-md p-6">
        <InvoicePreview order={order} />
      </div>

      {/* Actions */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={handleDownload}
          className="bg-main text-white px-6 py-3 rounded-lg hover:bg-main/90 transition font-medium"
        >
          Download Invoice
        </button>

        <Link
          href="/"
          className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700"
        >
          Continue Shopping →
        </Link>
      </div>
    </section>
  );
};

export default CheckoutSuccessPage;

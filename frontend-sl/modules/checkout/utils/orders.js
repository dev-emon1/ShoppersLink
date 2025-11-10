// modules/checkout/utils/orders.js

// 💳 Dummy invoice তৈরি
export const createDummyInvoice = ({ method, totals, cart }) => {
  const now = new Date();
  const invoiceId = `INV-${now.getTime()}`;
  const amount = totals?.grandTotal ?? 0;

  const status = method === "bkash" ? "paid" : "pending";

  return {
    id: invoiceId,
    method,
    amount,
    status,
    createdAt: now.toISOString(),
    cartSnapshot: cart || {},
  };
};

// 🧾 Order তৈরি
export const placeOrder = ({
  address,
  selectedShipping,
  payment,
  totals,
  invoice,
  cart,
}) => {
  const now = new Date();
  const orderId = `ORD-${now.getTime()}`;
  const status =
    payment?.method === "bkash"
      ? "confirmed"
      : payment?.method === "cod"
      ? "pending"
      : "processing";

  const order = {
    id: orderId,
    status,
    address,
    selectedShipping,
    payment,
    totals,
    invoice,
    items: cart || {},
    createdAt: now.toISOString(),
  };

  try {
    const prev = JSON.parse(localStorage.getItem("orders") || "[]");
    prev.push(order);
    localStorage.setItem("orders", JSON.stringify(prev));
  } catch (e) {
    console.error("Order save failed:", e);
  }

  return order;
};

// 🧹 Cart clear করা
export const clearCart = () => {
  try {
    sessionStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
  } catch (err) {
    console.error("Cart clear failed:", err);
  }
};

// 💳 Demo bKash Payment Simulation
export const simulateBkashPayment = async () => {
  // 80% success rate
  const success = Math.random() < 0.8;
  await new Promise((r) => setTimeout(r, 1200)); // simulate delay

  if (!success) throw new Error("Payment failed. Please try again.");

  return {
    transactionId: `BK-${Date.now()}`,
    status: "paid",
  };
};

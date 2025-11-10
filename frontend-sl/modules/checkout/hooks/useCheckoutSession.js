"use client";
import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { validateAddress, validatePayment } from "../utils/validators";
import { computeTotals } from "../utils/pricing";
import { loadJSON, saveJSON } from "../utils/storage";
import { CHECKOUT_SESSION_KEY } from "../constants";
import {
  createDummyInvoice,
  placeOrder,
  clearCart,
  simulateBkashPayment,
} from "../utils/orders";

export const useCheckoutSession = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const [step, setStep] = useState(1);

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    line1: "",
    city: "",
    postcode: "",
    notes: "",
  });

  const [selectedShipping, setSelectedShipping] = useState({});
  const [payment, setPayment] = useState({ method: null, meta: {} });
  const [cart, setCart] = useState({});
  const [discountInfo, setDiscountInfo] = useState({
    code: "",
    discount: 0,
    message: "",
  });
  const saveTimer = useRef(null);

  // Load cart from sessionStorage
  useEffect(() => {
    if (!isClient) return;
    const readCart = () => {
      try {
        setCart(JSON.parse(sessionStorage.getItem("cart")) || {});
      } catch {
        setCart({});
      }
    };
    readCart();
    window.addEventListener("cartUpdated", readCart);
    return () => window.removeEventListener("cartUpdated", readCart);
  }, [isClient]);

  const vendors = useMemo(() => cart || {}, [cart]);

  // Shipping options per vendor
  const shippingOptions = useMemo(() => {
    const map = {};
    Object.keys(vendors).forEach((vid) => {
      map[vid] = [
        { id: "standard", label: "Standard (2–4 days)", fee: 89 },
        { id: "express", label: "Express (1–2 days)", fee: 149 },
      ];
    });
    return map;
  }, [vendors]);

  // Base totals (before coupon)
  const basePrices = useMemo(
    () => computeTotals(vendors, selectedShipping, shippingOptions),
    [vendors, selectedShipping, shippingOptions]
  );

  // Coupon System (Dummy logic)
  const applyCoupon = useCallback(
    (code) => {
      const coupon = code.trim().toUpperCase();
      let discount = 0;
      let message = "";

      switch (coupon) {
        case "WELCOME10":
          discount = basePrices.subtotal * 0.1;
          message = "🎉 10% discount applied (Welcome Offer)";
          break;

        case "SAVE100":
          discount = 100;
          message = "💰 ৳100 discount applied!";
          break;

        case "FREESHIP":
          discount = 0;
          message = "🚚 Free Shipping applied!";
          break;

        case "BIGDEAL20":
          discount = basePrices.subtotal * 0.2;
          message = "🔥 20% discount applied!";
          break;

        case "TRYLINK50":
          discount = 50;
          message = "🧾 ৳50 demo discount applied!";
          break;

        default:
          discount = 0;
          message = "❌ Invalid or expired coupon code.";
      }

      setDiscountInfo({ code: coupon, discount, message });
    },
    [basePrices]
  );

  // Final totals (after coupon)
  const totals = useMemo(() => {
    // const vat = basePrices.vat;
    const shipping = basePrices.shipping;
    const subtotal = basePrices.subtotal;
    const discount = discountInfo?.discount || 0;
    const grandTotal = Math.max(subtotal + shipping - discount, 0);

    return {
      subtotal,
      shipping,
      discount,
      // vat,
      grandTotal,
      totalItems: basePrices.totalItems,
    };
  }, [basePrices, discountInfo]);

  // Persist checkout state
  useEffect(() => {
    if (!isClient) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      saveJSON(CHECKOUT_SESSION_KEY, {
        step,
        address,
        selectedShipping,
        payment,
        discountInfo,
      });
    }, 400);
    return () => clearTimeout(saveTimer.current);
  }, [isClient, step, address, selectedShipping, payment, discountInfo]);

  // Restore saved draft
  useEffect(() => {
    if (!isClient) return;
    const draft = loadJSON(CHECKOUT_SESSION_KEY);
    if (!draft) return;
    if (draft.step) setStep(draft.step);
    if (draft.address) setAddress(draft.address);
    if (draft.selectedShipping) setSelectedShipping(draft.selectedShipping);
    if (draft.payment) setPayment(draft.payment);
    if (draft.discountInfo) setDiscountInfo(draft.discountInfo);
  }, [isClient]);

  // Validation Guards
  const canContinueFromAddress = useCallback(
    (addr) => validateAddress(addr).valid,
    []
  );
  const canContinueFromShipping = useCallback(
    (sel) => Object.keys(vendors).every((vid) => !!sel?.[vid]),
    [vendors]
  );
  const canContinueFromPayment = useCallback(
    (p) => validatePayment(p).valid,
    []
  );

  // Trial bKash Payment Handler
  const generateInvoiceAndPlaceOrderForTrial = useCallback(async () => {
    const method = payment?.method;
    if (method !== "bkash") return null;

    try {
      const result = await simulateBkashPayment();
      const invoice = createDummyInvoice({
        method,
        totals,
        cart: vendors,
      });

      const order = placeOrder({
        address,
        selectedShipping,
        payment: {
          ...payment,
          meta: { transactionId: result.transactionId },
        },
        totals,
        invoice,
        cart: vendors,
      });

      clearCart();
      return { order, success: true };
    } catch (err) {
      console.warn("Demo payment failed:", err);
      return { success: false, error: err.message };
    }
  }, [payment, totals, vendors, address, selectedShipping]);

  const allowContinueOnCOD = useMemo(
    () => payment?.method === "cod",
    [payment]
  );

  // Snapshot for components
  const snapshot = useMemo(
    () => ({
      step,
      address,
      selectedShipping,
      paymentMethod: payment?.method ?? "",
      paymentMeta: payment?.meta ?? {},
      totals,
      discountInfo,
    }),
    [step, address, selectedShipping, payment, totals, discountInfo]
  );

  const setSnapshot = useCallback(
    (updater) => {
      const next =
        typeof updater === "function" ? updater(snapshot) : updater || {};
      if (next.step !== undefined) setStep(next.step);
      if (next.address !== undefined) setAddress(next.address);
      if (next.selectedShipping !== undefined)
        setSelectedShipping(next.selectedShipping);
      if (next.paymentMethod !== undefined || next.paymentMeta !== undefined) {
        setPayment({
          method: next.paymentMethod ?? payment.method,
          meta: next.paymentMeta ?? payment.meta,
        });
      }
      if (next.discountInfo !== undefined) setDiscountInfo(next.discountInfo);
    },
    [snapshot, payment]
  );

  return {
    isClient,
    step,
    setStep,
    address,
    setAddress,
    selectedShipping,
    setSelectedShipping,
    payment,
    setPayment,
    vendors,
    totals,
    shippingOptions,
    canContinueFromAddress,
    canContinueFromShipping,
    canContinueFromPayment,
    snapshot,
    setSnapshot,
    generateInvoiceAndPlaceOrderForTrial,
    allowContinueOnCOD,
    discountInfo,
    setDiscountInfo,
    applyCoupon,
  };
};

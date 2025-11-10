"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCheckoutSession } from "@/modules/checkout/hooks/useCheckoutSession";
import CheckoutSteps from "@/modules/checkout/components/CheckoutSteps";
import AddressForm from "@/modules/checkout/components/AddressForm";
import ShippingMethod from "@/modules/checkout/components/ShippingMethod";
import PaymentMethod from "@/modules/checkout/components/PaymentMethod";
import ReviewBlock from "@/modules/checkout/components/ReviewBlock";
import OrderSummary from "@/modules/checkout/components/OrderSummary";
import PlaceOrderButton from "@/modules/checkout/components/PlaceOrderButton";
import CheckoutGuard from "@/modules/checkout/components/CheckoutGuard";

const MemoizedAddressForm = React.memo(AddressForm);

const CheckoutPage = () => {
  const router = useRouter();

  const {
    isClient,
    address,
    setAddress,
    selectedShipping,
    setSelectedShipping,
    payment,
    vendors,
    totals,
    canContinueFromAddress,
    canContinueFromShipping,
    canContinueFromPayment,
    allowContinueOnCOD,
    generateInvoiceAndPlaceOrderForTrial,
  } = useCheckoutSession();

  const [step, setStep] = useState(1);
  const nextStep = useCallback(() => setStep((s) => Math.min(s + 1, 3)), []);
  const prevStep = useCallback(() => setStep((s) => Math.max(s - 1, 1)), []);

  const handleAddressChange = useCallback(
    (updated) => setAddress((prev) => ({ ...prev, ...updated })),
    [setAddress]
  );

  const handlePaymentContinue = useCallback(async () => {
    // COD flow
    if (allowContinueOnCOD) {
      nextStep();
      return;
    }

    // bKash demo payment
    if (payment?.method === "bkash") {
      const result = await generateInvoiceAndPlaceOrderForTrial();
      if (result?.success && result?.order?.id) {
        router.push(`/checkout/success?orderId=${result.order.id}`);
      } else {
        alert(result?.error || "Payment failed! Please try again.");
      }
      return;
    }

    // For other payment methods (placeholder)
    if (canContinueFromPayment(payment)) {
      nextStep();
    }
  }, [
    allowContinueOnCOD,
    payment,
    canContinueFromPayment,
    nextStep,
    generateInvoiceAndPlaceOrderForTrial,
    router,
  ]);

  // hydration guard
  if (!isClient) return null;

  return (
    <CheckoutGuard>
      <section className="container py-12 min-h-screen">
        <div className="flex justify-center mb-10">
          <CheckoutSteps step={step} setStep={setStep} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT PANEL */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence mode="wait">
              {/* STEP 1: Address & Shipping */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                      🏡 Delivery Address
                    </h3>
                    <MemoizedAddressForm
                      value={address}
                      onChange={handleAddressChange}
                    />
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                      🚚 Delivery Method
                    </h3>
                    <ShippingMethod
                      vendors={vendors}
                      selected={selectedShipping}
                      onSelect={setSelectedShipping}
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      disabled={
                        !canContinueFromAddress(address) ||
                        !canContinueFromShipping(selectedShipping)
                      }
                      onClick={nextStep}
                      className="bg-main text-white px-6 py-2 rounded-lg hover:bg-main/90 transition disabled:opacity-50"
                    >
                      Continue to Payment →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Payment */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                      💳 Payment Method
                    </h3>
                    <PaymentMethod />
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={prevStep}
                      className="text-sm text-gray-600 underline"
                    >
                      ← Back to Delivery
                    </button>
                    <button
                      disabled={
                        !(allowContinueOnCOD || canContinueFromPayment(payment))
                      }
                      onClick={handlePaymentContinue}
                      className="bg-main text-white px-6 py-2 rounded-lg hover:bg-main/90 transition disabled:opacity-50"
                    >
                      {payment?.method === "bkash"
                        ? "Pay & Place Order (Demo)"
                        : "Review Order →"}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Review & Confirm */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                      🧾 Review & Confirm
                    </h3>
                    <ReviewBlock
                      address={address}
                      payment={payment}
                      vendors={vendors}
                      totals={totals}
                    />
                    <div className="flex justify-between mt-6">
                      <button
                        onClick={prevStep}
                        className="text-sm text-gray-600 underline"
                      >
                        ← Back to Payment
                      </button>
                      <PlaceOrderButton />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT PANEL: Order Summary */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <OrderSummary totals={totals} />
            </div>
          </aside>
        </div>
      </section>
    </CheckoutGuard>
  );
};

export default CheckoutPage;

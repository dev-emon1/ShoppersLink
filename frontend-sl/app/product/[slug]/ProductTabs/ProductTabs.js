"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import DescriptionTab from "./DescriptionTab";
import SpecificationTab from "./SpecificationTab";
import ReviewsTab from "./ReviewsTab";
import DeliveryTab from "./DeliveryTab";

const tabs = [
  { id: "desc", title: "Description", Component: DescriptionTab },
  { id: "spec", title: "Specifications", Component: SpecificationTab },
  { id: "reviews", title: "Customer Reviews", Component: ReviewsTab },
  { id: "delivery", title: "Delivery & Returns", Component: DeliveryTab },
];

const ProductTabs = ({ product }) => {
  const [active, setActive] = useState("desc");

  const toggle = (id) => setActive((prev) => (prev === id ? null : id));

  return (
    <div className="container mt-12 max-w-4xl mx-auto">
      {tabs.map(({ id, title, Component }) => (
        <div
          key={id}
          className="border-b border-border overflow-hidden mb-2 bg-white rounded-lg shadow-sm"
        >
          <button
            className="w-full flex justify-between items-center py-4 px-5 text-left text-textPrimary font-semibold hover:bg-gray-50 transition"
            onClick={() => toggle(id)}
          >
            {title}
            <motion.div
              animate={{ rotate: active === id ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {active === id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="px-5 pb-4 text-sm text-textSecondary leading-relaxed"
              >
                <Component product={product} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ProductTabs;

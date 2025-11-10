"use client";

import { Car, Check, Phone } from "lucide-react";
import { TbReload } from "react-icons/tb";

const DeliveryTab = () => (
  <div>
    <p className="flex gap-2 mb-2">
      <span>
        <Check />
      </span>
      <strong>Free delivery</strong> on orders over ৳1000.
    </p>
    <p className="flex gap-2 mb-2">
      <span>
        <Car />
      </span>
      Estimated Delivery: 3–5 business days inside Dhaka.
    </p>
    <p className="flex gap-2 mb-2">
      <TbReload /> Easy returns within 7 days of purchase.
    </p>
    <p className="flex gap-2 mb-2">
      <Phone size={16} /> Customer Care: 09610-123456
    </p>
  </div>
);
export default DeliveryTab;

"use client";
const DescriptionTab = ({ product }) => (
  <div>
    <p>
      {product.description ||
        "This product is crafted from premium materials ensuring durability and comfort. Ideal for daily use or gifting."}
    </p>
  </div>
);
export default DescriptionTab;

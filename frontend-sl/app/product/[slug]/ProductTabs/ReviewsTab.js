"use client";
import RatingStars from "@/components/ui/RatingStars";

const ReviewsTab = ({ product }) => (
  <div className="space-y-2">
    <p className="font-medium text-textPrimary">
      ⭐ Average Rating: {product.rating || 4.8}/5
    </p>
    <RatingStars rating={product.rating || 4.8} />
    <p>
      “Excellent product! Quality is top-notch and delivery was fast.”
      <br />— <span className="italic text-textSecondary">Customer</span>
    </p>
  </div>
);
export default ReviewsTab;

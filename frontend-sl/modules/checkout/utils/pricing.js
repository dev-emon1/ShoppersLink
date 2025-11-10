export const computeTotals = (
  vendors = {},
  selectedShipping = {},
  shippingOptions = {}
) => {
  let subtotal = 0;
  let totalItems = 0;
  let shipping = 0;
  let discount = 0;

  // 1 Calculate subtotal + quantity + discount
  Object.values(vendors || {}).forEach((vendor) => {
    if (!vendor?.items || !Array.isArray(vendor.items)) return;

    vendor.items.forEach((item) => {
      const qty = Number(item?.quantity || 0);
      const price = Number(item?.price || 0);
      const oldPrice = Number(item?.oldPrice || price);
      const discountPerItem = oldPrice > price ? oldPrice - price : 0;

      subtotal += price * qty;
      discount += discountPerItem * qty;
      totalItems += qty;
    });
  });

  // 2 Calculate shipping fees per vendor
  Object.keys(vendors).forEach((vid) => {
    const optionId = selectedShipping?.[vid];
    const vendorOptions = shippingOptions?.[vid] || [];

    // default fallback = standard shipping (if no selection made)
    const found =
      vendorOptions.find((opt) => opt.id === optionId) ||
      vendorOptions.find((opt) => opt.id === "standard");

    if (found) shipping += Number(found.fee || 0);
  });

  // ✅ 3️⃣ Calculate VAT & totals
  // const vatRate = 0.05; // 5% VAT
  // const vat = subtotal * vatRate;
  const grandTotal = subtotal + shipping - discount;

  return {
    subtotal,
    shipping,
    discount,
    // vat,
    grandTotal,
    totalItems,
  };
};

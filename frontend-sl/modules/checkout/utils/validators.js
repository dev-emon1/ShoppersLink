export const ensure = (v, fallback = "") => (v == null ? fallback : v);

export const validateAddress = (addr) => {
  if (!addr) return { valid: false, errors: ["Missing address"] };
  const errors = [];
  if (!addr.fullName) errors.push("Full name is required");
  if (!addr.phone) errors.push("Phone is required");
  if (!addr.line1) errors.push("Address line is required");
  if (!addr.city) errors.push("City is required");
  if (!addr.postcode) errors.push("Postcode is required");
  return { valid: errors.length === 0, errors };
};

export const validatePayment = (p) => {
  if (!p?.method) return { valid: false, errors: ["Select a payment method"] };
  return { valid: true, errors: [] };
};

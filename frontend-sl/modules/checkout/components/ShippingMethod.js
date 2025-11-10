"use client";
const ShippingMethod = ({ vendors, selected, onSelect }) => {
  const optionsPerVendor = {};
  Object.keys(vendors || {}).forEach((vid) => {
    optionsPerVendor[vid] = [
      { id: "standard", label: "inside Dhaka", fee: 89 },
      { id: "express", label: "outside Dhaka", fee: 149 },
    ];
  });

  const setVendorShip = (vid, methodId) => {
    onSelect({ ...selected, [vid]: methodId });
  };

  return (
    <div className="space-y-4">
      {Object.keys(vendors).map((vid) => {
        const v = vendors[vid];
        return (
          <div key={vid} className="border border-border rounded-lg p-3">
            <p className="font-medium mb-2">Vendor: {v.vendorName}</p>
            <div className="flex flex-col gap-2">
              {optionsPerVendor[vid].map((opt) => (
                <label key={opt.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`ship-${vid}`}
                    checked={selected?.[vid] === opt.id}
                    onChange={() => setVendorShip(vid, opt.id)}
                  />
                  <span className="text-sm">
                    {opt.label} — ৳{opt.fee}
                  </span>
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ShippingMethod;

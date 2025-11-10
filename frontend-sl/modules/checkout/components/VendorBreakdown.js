const VendorBreakdown = ({ vendors }) => {
  return (
    <div className="space-y-3 mb-4">
      {Object.keys(vendors).map((vid) => {
        const v = vendors[vid];
        return (
          <div key={vid} className="border border-border rounded-lg p-3">
            <p className="font-medium mb-2">Vendor: {v.vendorName}</p>
            <ul className="space-y-1 text-sm">
              {v.items.map((it) => (
                <li key={it.id} className="flex justify-between">
                  <span>
                    {it.name} × {it.quantity}
                  </span>
                  <span>৳{(it.price * it.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default VendorBreakdown;

"use client";
const steps = [
  { id: 1, label: "Address & Delivery" },
  { id: 2, label: "Payment" },
  { id: 3, label: "Review & Confirm" },
];

const CheckoutSteps = ({ step, setStep }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      {steps.map((s, idx) => {
        const active = step === s.id;
        const done = step > s.id;

        return (
          <div key={s.id} className="flex items-center gap-2">
            <button
              onClick={() => (done ? setStep(s.id) : null)}
              className={`w-8 h-8 rounded-full font-semibold flex items-center justify-center transition
                ${
                  active
                    ? "bg-main text-white shadow"
                    : done
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
            >
              {done ? "✓" : s.id}
            </button>
            <span
              className={`text-sm font-medium ${
                active ? "text-main" : "text-gray-600"
              }`}
            >
              {s.label}
            </span>
            {idx < steps.length - 1 && (
              <span className="w-8 border-t border-dashed border-gray-300"></span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutSteps;

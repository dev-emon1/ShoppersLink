"use client";
import React, { useMemo, useCallback } from "react";

const TextInput = React.memo(function TextInput({
  label,
  value,
  onChange,
  placeholder,
  className = "",
  inputProps = {},
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={
          "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-main focus:border-main focus:outline-none transition " +
          className
        }
        {...inputProps}
      />
    </div>
  );
});

const AddressForm = ({ value = {}, onChange }) => {
  const address = useMemo(
    () => ({
      fullName: value.fullName ?? "",
      phone: value.phone ?? "",
      line1: value.line1 ?? "",
      city: value.city ?? "",
      postcode: value.postcode ?? "",
      notes: value.notes ?? "",
    }),
    [
      value.fullName,
      value.phone,
      value.line1,
      value.city,
      value.postcode,
      value.notes,
    ]
  );

  const handleChange = useCallback(
    (field) => (val) => {
      onChange({ ...address, [field]: val });
    },
    [onChange, address]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TextInput
        label="Full Name"
        value={address.fullName}
        onChange={handleChange("fullName")}
        placeholder="e.g. Shahariar Emon"
      />
      <TextInput
        label="Phone"
        value={address.phone}
        onChange={handleChange("phone")}
        placeholder="e.g. 017xxxxxxx"
        inputProps={{ inputMode: "tel" }}
      />
      <TextInput
        label="Address Line"
        value={address.line1}
        onChange={handleChange("line1")}
        placeholder="House / Road / Area"
        className="md:col-span-2"
      />
      <TextInput
        label="City"
        value={address.city}
        onChange={handleChange("city")}
        placeholder="e.g. Dhaka"
      />
      <TextInput
        label="Postcode"
        value={address.postcode}
        onChange={handleChange("postcode")}
        placeholder="e.g. 1207"
        inputProps={{ inputMode: "numeric" }}
      />
      <TextInput
        label="Additional Notes (optional)"
        value={address.notes}
        onChange={handleChange("notes")}
        placeholder="Any special instructions"
        className="md:col-span-2"
      />
    </div>
  );
};

export default AddressForm;

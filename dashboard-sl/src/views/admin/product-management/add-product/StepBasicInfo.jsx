/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { Book, Search, UserCheck2 } from "lucide-react";
import Heading from "../../../../components/common/Heading";
import SearchInput from "../../../../components/common/SearchInput";
import {
  categories,
  subcategories,
  childCategories,
  brandData as initialBrands,
} from "../../../../data/admin/product-management/dummyData";

const StepBasicInfo = ({ formData, onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [brands, setBrands] = useState(initialBrands);
  const [newBrand, setNewBrand] = useState("");

  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  // ===== Watched Fields =====
  const basicInfo = watch("basicInfo");
  const selectedCategory = basicInfo?.category || "";
  const selectedSubcategory = basicInfo?.subcategory || "";
  const selectedChild = basicInfo?.childCategory || "";
  const selectedVendor = basicInfo?.vendor || null;

  // ===== Dummy Vendors =====
  const vendors = useMemo(
    () => [
      {
        id: "V-1001",
        name: "Tech Haven",
        email: "techhaven@gmail.com",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
      {
        id: "V-1002",
        name: "Fashion World",
        email: "contact@fashionworld.com",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        id: "V-1003",
        name: "Home Comforts",
        email: "homecomforts@gmail.com",
        avatar: "https://i.pravatar.cc/150?img=6",
      },
    ],
    []
  );

  // ===== Filter Vendors =====
  const filteredVendors = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return vendors;
    return vendors.filter(
      (v) => v.name.toLowerCase().includes(q) || v.id.toLowerCase().includes(q)
    );
  }, [searchTerm, vendors]);

  // ===== Vendor Select =====
  const handleVendorSelect = (vendor) => {
    setValue("basicInfo.vendor", vendor, { shouldValidate: true });
    onChange("vendor", vendor);
    setSearchTerm("");
  };

  // ===== Category Logic =====
  const handleCategoryChange = (value) => {
    setValue("basicInfo.category", value);
    setValue("basicInfo.subcategory", "");
    setValue("basicInfo.childCategory", "");
    onChange("category", value);
    onChange("subcategory", "");
    onChange("childCategory", "");
  };

  const handleSubcategoryChange = (value) => {
    setValue("basicInfo.subcategory", value);
    setValue("basicInfo.childCategory", "");
    onChange("subcategory", value);
    onChange("childCategory", "");
  };

  const handleChildCategoryChange = (value) => {
    setValue("basicInfo.childCategory", value);
    onChange("childCategory", value);
  };

  // ===== Filtered Lists =====
  const availableSubcategories = useMemo(() => {
    if (!selectedCategory) return [];
    return subcategories.filter(
      (s) => s.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  const availableChildCategories = useMemo(() => {
    if (!selectedSubcategory) return [];
    return childCategories.filter(
      (c) => c.subcategory.toLowerCase() === selectedSubcategory.toLowerCase()
    );
  }, [selectedSubcategory]);

  // ===== Brand Add =====
  const handleAddBrand = () => {
    if (!newBrand.trim()) return alert("Please enter a brand name!");
    const exists = brands.some(
      (b) => b.name.toLowerCase() === newBrand.toLowerCase()
    );
    if (exists) return alert("Brand already exists!");

    const newEntry = {
      id: brands.length + 1,
      name: newBrand,
      slug: newBrand.toLowerCase().replace(/\s+/g, "-"),
      status: "active",
    };
    setBrands((prev) => [...prev, newEntry]);
    setValue("basicInfo.brand", newEntry.name);
    onChange("brand", newEntry.name);
    setNewBrand("");
    alert(`✅ Brand "${newEntry.name}" added successfully`);
  };

  // ===== Helper for Red Border Animation =====
  const errorInputClass = (hasError) =>
    `border rounded-md px-3 py-2 outline-none transition-all duration-300 ${
      hasError
        ? "border-red ring-1 ring-red/50 bg-red/5 animate-[fade_0.4s_ease-in]"
        : "border-border focus:ring-1 focus:ring-main"
    }`;

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="mb-3 flex items-center gap-2">
        <Book /> <Heading title="Basic Information" />
      </div>

      {/* ===== Vendor Section ===== */}
      <div
        className={`border rounded-md p-3 ${
          errors.basicInfo?.vendor
            ? "border-red bg-red/5"
            : "border-border bg-gray-50"
        } transition-all duration-300`}
      >
        <div className="flex items-center gap-2 mb-2">
          <UserCheck2 className="w-4 h-4" />
          <p className="text-sm font-medium">
            Admin is uploading{" "}
            <span className="text-main">on behalf of a Vendor</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {/* Vendor Search */}
          <div>
            <SearchInput
              placeholderText="Search vendor by name or ID…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search size={16} />}
            />
            <ul className="border border-border rounded-md max-h-48 overflow-y-auto bg-white mt-2">
              {filteredVendors.length > 0 ? (
                filteredVendors.map((vendor) => (
                  <li
                    key={vendor.id}
                    onClick={() => handleVendorSelect(vendor)}
                    className="px-3 py-2 hover:bg-main/10 cursor-pointer text-sm flex items-center gap-2 transition"
                  >
                    <img
                      src={vendor.avatar}
                      alt={vendor.name}
                      className="w-7 h-7 rounded-full"
                    />
                    <span className="font-medium">{vendor.name}</span>
                    <span className="text-xs text-gray-500 ml-auto">
                      {vendor.id}
                    </span>
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-xs text-gray-500">
                  No vendors found
                </li>
              )}
            </ul>
            {errors.basicInfo?.vendor && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red text-xs mt-1"
              >
                {errors.basicInfo.vendor.message}
              </motion.p>
            )}
          </div>

          {/* Selected Vendor */}
          <div className="bg-white border border-border rounded-md p-3">
            <p className="text-xs text-gray-500 mb-2">Selected Vendor</p>
            {selectedVendor ? (
              <div className="flex items-center gap-3">
                <img
                  src={selectedVendor.avatar}
                  alt={selectedVendor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{selectedVendor.name}</h4>
                  <p className="text-xs text-gray-500">
                    {selectedVendor.id} • {selectedVendor.email}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-red">
                Please select a vendor to continue.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ===== Basic Fields ===== */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Product Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Product Name</label>
          <input
            type="text"
            {...register("basicInfo.name")}
            placeholder="e.g., Apple iPhone 15 Pro Max"
            className={errorInputClass(errors.basicInfo?.name)}
          />
          {errors.basicInfo?.name && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red text-xs mt-1"
            >
              {errors.basicInfo.name.message}
            </motion.p>
          )}
        </div>

        {/* SKU */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">SKU</label>
          <input
            type="text"
            {...register("basicInfo.sku")}
            placeholder="e.g., PRD-000123"
            className={errorInputClass(errors.basicInfo?.sku)}
          />
          {errors.basicInfo?.sku && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red text-xs mt-1"
            >
              {errors.basicInfo.sku.message}
            </motion.p>
          )}
        </div>
      </div>

      {/* ===== Brand ===== */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Brand</label>
        <div className="flex gap-2">
          <select
            {...register("basicInfo.brand")}
            className={`${errorInputClass(
              errors.basicInfo?.brand
            )} flex-1 bg-white`}
            onChange={(e) => {
              setValue("basicInfo.brand", e.target.value);
              onChange("brand", e.target.value);
            }}
          >
            <option value="">Select Brand</option>
            {brands.map((b) => (
              <option key={b.id} value={b.name}>
                {b.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="New brand"
            value={newBrand}
            onChange={(e) => setNewBrand(e.target.value)}
            className="border border-border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-main w-40"
          />
          <button
            type="button"
            onClick={handleAddBrand}
            className="bg-main text-white px-4 rounded-md hover:bg-mainHover transition-all"
          >
            Add
          </button>
        </div>
        {errors.basicInfo?.brand && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red text-xs mt-1"
          >
            {errors.basicInfo.brand.message}
          </motion.p>
        )}
      </div>

      {/* ===== Category Chain ===== */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Category */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className={errorInputClass(errors.basicInfo?.category)}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.basicInfo?.category && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red text-xs mt-1"
            >
              {errors.basicInfo.category.message}
            </motion.p>
          )}
        </div>

        {/* Subcategory */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Subcategory</label>
          <select
            value={selectedSubcategory}
            onChange={(e) => handleSubcategoryChange(e.target.value)}
            disabled={!selectedCategory}
            className="border border-border rounded-md px-3 py-2 outline-none bg-white focus:ring-1 focus:ring-main disabled:bg-gray-100"
          >
            <option value="">
              {selectedCategory
                ? "Select Subcategory"
                : "Select Category First"}
            </option>
            {availableSubcategories.map((sub) => (
              <option key={sub.id} value={sub.subcategory}>
                {sub.subcategory}
              </option>
            ))}
          </select>
        </div>

        {/* Child Category */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Child Category</label>
          <select
            value={selectedChild}
            onChange={(e) => handleChildCategoryChange(e.target.value)}
            disabled={!selectedSubcategory}
            className="border border-border rounded-md px-3 py-2 outline-none bg-white focus:ring-1 focus:ring-main disabled:bg-gray-100"
          >
            <option value="">
              {selectedSubcategory
                ? "Select Child Category"
                : "Select Subcategory First"}
            </option>
            {availableChildCategories.map((child) => (
              <option key={child.id} value={child.childCategory}>
                {child.childCategory}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default StepBasicInfo;

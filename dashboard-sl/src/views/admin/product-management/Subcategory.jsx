import React, { useState, useMemo, useCallback } from "react";
import PageHeader from "../../../components/common/PageHeader";
import Table from "../../../components/table/Table";
import TableActions from "../../../components/table/TableActions";
import StatusBadge from "../../../components/common/StatusBadge";
import SlidePanel from "../../../components/common/SlidePanel";
import ImageUploader from "../../../components/common/ImageUploader";
import Pagination from "../../../components/Pagination";

// ===== Dummy Data =====
import {
  categories,
  subcategories as initialSubcategories,
} from "../../../data/admin/product-management/dummyData";
import FilterBar from "../../../components/common/FilterBar";

const Subcategory = React.memo(() => {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategoryDetails, setSubCategoryDetails] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [subcategories, setSubcategories] = useState(initialSubcategories);

  // ==== Handlers ====
  const handleFileSelect = useCallback((file) => setImageFile(file), []);

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  }, []);

  const handlePerPageChange = useCallback((e) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const handleFilterChange = useCallback((type, value) => {
    if (type === "category") setFilterCategory(value);
    if (type === "status") setFilterStatus(value);
    setPage(1);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!selectedCategory) return alert("⚠️ Please select a category first!");
      if (!subCategoryName.trim())
        return alert("⚠️ Subcategory name is required!");

      const categoryData = categories.find(
        (cat) => cat.id === Number(selectedCategory)
      );

      const newSubcategory = {
        id: crypto.randomUUID?.() || Date.now(),
        subcategory: subCategoryName.trim(),
        category: categoryData?.name || "Unknown",
        categoryImg: categoryData?.image || "",
        totalProducts: 0,
        status: "active",
        description: subCategoryDetails.trim() || "",
        image: imageFile ? URL.createObjectURL(imageFile) : null,
      };

      setSubcategories((prev) => [...prev, newSubcategory]);
      console.log("✅ New Subcategory Added:", newSubcategory);

      // Reset
      setSubCategoryName("");
      setSubCategoryDetails("");
      setSelectedCategory("");
      setImageFile(null);
      setShow(false);
      alert("✅ Subcategory added successfully!");
    },
    [selectedCategory, subCategoryName, subCategoryDetails, imageFile]
  );

  // ==== Filter + Pagination ====
  const { currentData, totalPages } = useMemo(() => {
    let filtered = subcategories;

    if (searchTerm.trim()) {
      filtered = filtered.filter((sub) =>
        sub.subcategory.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCategory) {
      filtered = filtered.filter((sub) => sub.category === filterCategory);
    }

    if (filterStatus) {
      filtered = filtered.filter((sub) => sub.status === filterStatus);
    }

    const total = Math.ceil(filtered.length / perPage);
    const start = (page - 1) * perPage;
    const current = filtered.slice(start, start + perPage);
    return { currentData: current, totalPages: total };
  }, [subcategories, searchTerm, filterCategory, filterStatus, perPage, page]);

  // ==== Table Columns ====
  const columns = [
    {
      key: "no",
      label: "No",
      render: (item, i, page, perPage) => (page - 1) * perPage + i + 1,
      className: "text-center w-[50px]",
    },
    {
      key: "category",
      label: "Category",
      render: (item) => (
        <div className="flex items-center gap-2">
          {item.categoryImg && (
            <img
              src={item.categoryImg}
              alt={item.category}
              className="w-8 h-8 rounded object-cover border border-border"
            />
          )}
          <span className="capitalize text-sm font-medium">
            {item.category}
          </span>
        </div>
      ),
    },
    {
      key: "subcategory",
      label: "Subcategory",
      sortable: true,
      className: "font-medium text-gray-800 capitalize",
    },
    {
      key: "totalProducts",
      label: "Products",
      className: "text-center hidden sm:table-cell",
    },
    {
      key: "status",
      label: "Status",
      render: (item) => <StatusBadge status={item.status} />,
      className: "text-center hidden md:table-cell",
    },
    {
      key: "actions",
      label: "Actions",
      className: "text-center",
      render: () => <TableActions />,
    },
  ];

  // ==== Unique Category Options ====
  const categoryOptions = [...new Set(categories.map((cat) => cat.name))];

  return (
    <div className="px-4">
      <PageHeader
        title="Subcategories"
        searchTerm={searchTerm}
        onSearch={handleSearch}
        perPage={perPage}
        onPerPageChange={handlePerPageChange}
        onAddClick={() => setShow(true)}
      />

      <div className="mb-4 bg-white p-3 rounded-md shadow-sm">
        <FilterBar
          filterCategory={filterCategory}
          filterStatus={filterStatus}
          categories={categoryOptions}
          perPage={perPage}
          onFilterChange={handleFilterChange}
          onPerPageChange={handlePerPageChange}
        />
      </div>

      {/* ===== Table Section ===== */}
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
          <div className="bg-white p-4 rounded-md shadow-md overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <Table
              columns={columns}
              data={currentData}
              page={page}
              perPage={perPage}
              enableCheckbox={true}
              showFooter={true}
            />
            <div className="flex justify-end mt-4">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          </div>
        </div>

        {/* ===== Slide Panel: Add Subcategory ===== */}
        <SlidePanel
          show={show}
          title="Add Subcategory"
          onClose={() => setShow(false)}
        >
          <form onSubmit={handleSubmit}>
            {/* Category Select */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-sm font-medium mb-1">
                Select Category <span className="text-red">*</span>
              </label>
              <select
                className="px-2 py-2 border border-border rounded-md outline-none bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">-- Choose Category --</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory Name */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-sm font-medium mb-1">
                Subcategory Name <span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="px-2 py-2 border border-border rounded-md text-sm outline-none focus:ring-1 focus:ring-main"
                placeholder="Enter subcategory name"
                value={subCategoryName}
                onChange={(e) => setSubCategoryName(e.target.value)}
                disabled={!selectedCategory}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-sm font-medium mb-1">
                Description (optional)
              </label>
              <textarea
                className="px-2 py-2 border border-border rounded-md text-sm outline-none focus:ring-1 focus:ring-main resize-none"
                placeholder="Enter subcategory details"
                value={subCategoryDetails}
                onChange={(e) => setSubCategoryDetails(e.target.value)}
                maxLength={250}
                disabled={!selectedCategory}
                rows={3}
              />
            </div>

            {/* Image Upload */}
            <div className="max-w-md mx-auto mt-6">
              <label className="text-sm font-medium mb-1">
                Subcategory Image (optional)
              </label>
              <ImageUploader onFileSelect={handleFileSelect} multiple={false} />
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={!selectedCategory || !subCategoryName}
                className={`w-full rounded-md px-7 py-2 text-white text-sm font-medium transition-all ${
                  !selectedCategory || !subCategoryName
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-main hover:bg-mainHover"
                }`}
              >
                Add Subcategory
              </button>
            </div>
          </form>
        </SlidePanel>
      </div>
    </div>
  );
});

export default Subcategory;

import React, { useState, useMemo, useCallback } from "react";
import Table from "../../../components/table/Table";
import StatusBadge from "../../../components/common/StatusBadge";
import TableActions from "../../../components/table/TableActions";
import SlidePanel from "../../../components/common/SlidePanel";
import ImageUploader from "../../../components/common/ImageUploader";
import PageHeader from "../../../components/common/PageHeader";
import Pagination from "../../../components/Pagination";
import FilterBar from "../../../components/common/FilterBar";
import { categories as categoryData } from "../../../data/admin/product-management/dummyData";

const Category = React.memo(() => {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryDetails, setCategoryDetails] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState(categoryData);

  // ====== File Select ======
  const handleFileSelect = useCallback((file) => setImageFile(file), []);

  // ====== Search ======
  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  }, []);

  // ====== Per Page ======
  const handlePerPageChange = useCallback((e) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  // ====== Filter Change ======
  const handleFilterChange = useCallback((type, value) => {
    if (type === "month") setFilterMonth(value);
    if (type === "status") setFilterStatus(value);
    setPage(1);
  }, []);

  // ====== Submit ======
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!categoryName.trim()) return alert("⚠️ Category name is required!");
      if (!imageFile) return alert("⚠️ Please upload an image!");

      const newCategory = {
        id: crypto.randomUUID?.() || Date.now(),
        name: categoryName.trim(),
        image: URL.createObjectURL(imageFile),
        subCount: 0,
        productCount: 0,
        status: "active",
        description: categoryDetails.trim() || "",
        month: "October", // উদাহরণস্বরূপ, static month (API integration এ dynamic হবে)
      };

      setCategories((prev) => [...prev, newCategory]);
      console.log("✅ New Category Added:", newCategory);

      setCategoryName("");
      setCategoryDetails("");
      setImageFile(null);
      setShow(false);
      alert("✅ Category added successfully!");
    },
    [categoryName, categoryDetails, imageFile]
  );

  // ====== Filter + Pagination ======
  const { currentData, totalPages } = useMemo(() => {
    let filtered = categories;

    // Search
    if (searchTerm.trim()) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Month filter
    if (filterMonth) {
      filtered = filtered.filter((cat) => cat.month === filterMonth);
    }

    // Status filter
    if (filterStatus) {
      filtered = filtered.filter((cat) => cat.status === filterStatus);
    }

    // Pagination
    const total = Math.ceil(filtered.length / perPage);
    const start = (page - 1) * perPage;
    const current = filtered.slice(start, start + perPage);
    return { currentData: current, totalPages: total };
  }, [categories, searchTerm, filterMonth, filterStatus, perPage, page]);

  // ====== Table Columns ======
  const columns = [
    {
      key: "no",
      label: "No",
      render: (item, i, page, perPage) => (page - 1) * perPage + i + 1,
      className: "text-center w-[50px]",
    },
    {
      key: "image",
      label: "Image",
      render: (item) => (
        <img
          src={item.image}
          alt={item.name}
          className="w-10 h-10 rounded object-cover border border-border"
        />
      ),
    },
    {
      key: "name",
      label: "Name",
      sortable: true,
      className: "font-medium text-gray-800 capitalize",
    },
    {
      key: "subCount",
      label: "Subcategories",
      className: "text-center hidden sm:table-cell",
    },
    {
      key: "productCount",
      label: "Products",
      className: "text-center hidden md:table-cell",
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

  return (
    <div className="px-4">
      {/* ===== Header ===== */}
      <PageHeader
        title="Categories"
        searchTerm={searchTerm}
        onSearch={handleSearch}
        perPage={perPage}
        onPerPageChange={handlePerPageChange}
        onAddClick={() => setShow(true)}
      />

      {/* ===== Filters ===== */}
      <div className="mb-4 bg-white p-3 rounded-md shadow-sm">
        <FilterBar
          filterMonth={filterMonth}
          filterStatus={filterStatus}
          months={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ]}
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

        {/* ===== Slide Panel: Add Category ===== */}
        <SlidePanel
          show={show}
          title="Add New Category"
          onClose={() => setShow(false)}
        >
          <form onSubmit={handleSubmit}>
            {/* Category Name */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-sm font-medium mb-1">
                Category Name <span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="px-3 py-2 border border-border rounded-md outline-none focus:ring-1 focus:ring-main text-sm"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-sm font-medium mb-1">
                Description (optional)
              </label>
              <textarea
                className="px-3 py-2 border border-border rounded-md outline-none focus:ring-1 focus:ring-main text-sm resize-none"
                placeholder="Enter category description"
                value={categoryDetails}
                onChange={(e) => setCategoryDetails(e.target.value)}
                rows={3}
              />
            </div>

            {/* Image Upload */}
            <div className="max-w-md mx-auto mt-6">
              <label className="text-sm font-medium mb-1">
                Category Image <span className="text-red">*</span>
              </label>
              <ImageUploader onFileSelect={handleFileSelect} multiple={false} />
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={!categoryName || !imageFile}
                className={`w-full rounded-md px-7 py-2 text-white text-sm font-medium transition-all ${
                  !categoryName || !imageFile
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-main hover:bg-mainHover"
                }`}
              >
                Add Category
              </button>
            </div>
          </form>
        </SlidePanel>
      </div>
    </div>
  );
});

export default Category;

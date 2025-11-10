import React, { useState, useMemo, useCallback } from "react";
import PageHeader from "../../../components/common/PageHeader";
import Table from "../../../components/table/Table";
import TableActions from "../../../components/table/TableActions";
import StatusBadge from "../../../components/common/StatusBadge";
import SlidePanel from "../../../components/common/SlidePanel";
import ImageUploader from "../../../components/common/ImageUploader";
import Pagination from "../../../components/Pagination";
import FilterBar from "../../../components/common/FilterBar";

// ===== Dummy Data =====
import {
  subcategories,
  childCategories as initialChildCategories,
} from "../../../data/admin/product-management/dummyData";

const ChildCategory = React.memo(() => {
  // ==== States ====
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubcategory, setFilterSubcategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [childCategoryName, setChildCategoryName] = useState("");
  const [childCategoryDetails, setChildCategoryDetails] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [childCats, setChildCats] = useState(initialChildCategories);

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
    if (type === "subcategory") setFilterSubcategory(value);
    if (type === "status") setFilterStatus(value);
    setPage(1);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!selectedSubcategory)
        return alert("⚠️ Please select a subcategory first!");
      if (!childCategoryName.trim())
        return alert("⚠️ Child category name is required!");

      const subData = subcategories.find(
        (s) => s.id === Number(selectedSubcategory)
      );

      const newChild = {
        id: crypto.randomUUID?.() || Date.now().toString(),
        category: subData?.category || "Unknown",
        subcategory: subData?.subcategory || "Unknown",
        childCategory: childCategoryName.trim(),
        totalProducts: 0,
        status: "active",
        description: childCategoryDetails.trim() || "",
        image: imageFile ? URL.createObjectURL(imageFile) : null,
      };

      setChildCats((prev) => [...prev, newChild]);
      console.log("✅ New Child Category Added:", newChild);

      // Reset form
      setChildCategoryName("");
      setChildCategoryDetails("");
      setSelectedSubcategory("");
      setImageFile(null);
      setShow(false);
      alert("✅ Child Category added successfully!");
    },
    [selectedSubcategory, childCategoryName, childCategoryDetails, imageFile]
  );

  // ==== Filter + Pagination ====
  const { currentData, totalPages } = useMemo(() => {
    let filtered = childCats;

    if (searchTerm.trim()) {
      filtered = filtered.filter((item) =>
        item.childCategory?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterSubcategory) {
      filtered = filtered.filter(
        (item) => item.subcategory === filterSubcategory
      );
    }

    if (filterStatus) {
      filtered = filtered.filter((item) => item.status === filterStatus);
    }

    const total = Math.ceil(filtered.length / perPage);
    const start = (page - 1) * perPage;
    const current = filtered.slice(start, start + perPage);
    return { currentData: current, totalPages: total };
  }, [childCats, searchTerm, filterSubcategory, filterStatus, perPage, page]);

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
      sortable: true,
      className: "capitalize",
    },
    {
      key: "subcategory",
      label: "Subcategory",
      sortable: true,
      className: "capitalize",
    },
    {
      key: "childCategory",
      label: "Child Category",
      sortable: true,
      className: "capitalize font-medium text-gray-800",
    },
    {
      key: "status",
      label: "Status",
      render: (item) => <StatusBadge status={item.status} />,
      className: "text-center hidden sm:table-cell",
    },
    {
      key: "actions",
      label: "Actions",
      render: () => <TableActions />,
      className: "text-center",
    },
  ];

  // ==== Unique Subcategory Options ====
  const subcategoryOptions = [
    ...new Set(subcategories.map((s) => s.subcategory)),
  ];

  return (
    <div className="px-4">
      {/* ===== Header ===== */}
      <PageHeader
        title="Child Categories"
        searchTerm={searchTerm}
        onSearch={handleSearch}
        perPage={perPage}
        onPerPageChange={handlePerPageChange}
        onAddClick={() => setShow(true)}
      />

      {/* ===== Filters ===== */}
      <div className="mb-4 bg-white p-3 rounded-md shadow-sm">
        <FilterBar
          filterSubcategory={filterSubcategory}
          filterStatus={filterStatus}
          subcategories={subcategoryOptions}
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

        {/* ===== Slide Panel: Add Child Category ===== */}
        <SlidePanel
          show={show}
          title="Add Child Category"
          onClose={() => setShow(false)}
        >
          <form onSubmit={handleSubmit}>
            {/* Subcategory Select */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-sm font-medium mb-1">
                Select Subcategory <span className="text-red">*</span>
              </label>
              <select
                className="px-2 py-2 border border-border rounded-md outline-none bg-white"
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
              >
                <option value="">-- Choose Subcategory --</option>
                {subcategories.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.subcategory} ({sub.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Child Category Name */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-sm font-medium mb-1">
                Child Category Name <span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="px-2 py-2 border border-border rounded-md text-sm outline-none focus:ring-1 focus:ring-main"
                placeholder="Enter child category name"
                value={childCategoryName}
                onChange={(e) => setChildCategoryName(e.target.value)}
                disabled={!selectedSubcategory}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-sm font-medium mb-1">
                Description (optional)
              </label>
              <textarea
                className="px-2 py-2 border border-border rounded-md text-sm outline-none focus:ring-1 focus:ring-main resize-none"
                placeholder="Enter child category details"
                value={childCategoryDetails}
                onChange={(e) => setChildCategoryDetails(e.target.value)}
                maxLength={250}
                disabled={!selectedSubcategory}
                rows={3}
              />
            </div>

            {/* Image Upload */}
            <div className="max-w-md mx-auto mt-6">
              <label className="text-sm font-medium mb-1">
                Child Category Image (optional)
              </label>
              <ImageUploader onFileSelect={handleFileSelect} multiple={false} />
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={!selectedSubcategory || !childCategoryName}
                className={`w-full rounded-md px-7 py-2 text-white text-sm font-medium transition-all ${
                  !selectedSubcategory || !childCategoryName
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-main hover:bg-mainHover"
                }`}
              >
                Add Child Category
              </button>
            </div>
          </form>
        </SlidePanel>
      </div>
    </div>
  );
});

export default ChildCategory;

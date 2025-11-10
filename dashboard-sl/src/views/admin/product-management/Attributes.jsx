import React, { useState, useMemo, useCallback } from "react";
import * as XLSX from "xlsx";
import PageHeader from "../../../components/common/PageHeader";
import Table from "../../../components/table/Table";
import TableActions from "../../../components/table/TableActions";
import StatusBadge from "../../../components/common/StatusBadge";
import SlidePanel from "../../../components/common/SlidePanel";
import Pagination from "../../../components/Pagination";
import FilterBar from "../../../components/common/FilterBar";
import { dummyAttributes } from "../../../data/admin/product-management/dummyData";

const Attributes = React.memo(() => {
  // ====== States ======
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [attributeName, setAttributeName] = useState("");
  const [status, setStatus] = useState("active");
  const [attributes, setAttributes] = useState(dummyAttributes);

  // ====== Handlers ======
  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  }, []);

  const handlePerPageChange = useCallback((e) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const handleFilterChange = useCallback((type, value) => {
    if (type === "month") setFilterMonth(value);
    if (type === "status") setFilterStatus(value);
    setPage(1);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!attributeName.trim()) return alert("⚠️ Attribute name is required!");

      const newAttribute = {
        id: crypto.randomUUID?.() || Date.now(),
        name: attributeName.trim(),
        values: [],
        status,
        month: "October", // static for demo
      };

      setAttributes((prev) => [...prev, newAttribute]);
      console.log("✅ New Attribute Added:", newAttribute);

      // Reset
      setAttributeName("");
      setStatus("active");
      setShow(false);
      alert("✅ Attribute added successfully!");
    },
    [attributeName, status]
  );

  // ====== Filter + Pagination ======
  const { filteredData, currentData, totalPages } = useMemo(() => {
    let filtered = attributes;

    if (searchTerm.trim()) {
      filtered = filtered.filter((attr) =>
        attr.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterMonth)
      filtered = filtered.filter((attr) => attr.month === filterMonth);
    if (filterStatus)
      filtered = filtered.filter((attr) => attr.status === filterStatus);

    const total = Math.ceil(filtered.length / perPage);
    const start = (page - 1) * perPage;
    const current = filtered.slice(start, start + perPage);

    return { filteredData: filtered, currentData: current, totalPages: total };
  }, [attributes, searchTerm, filterMonth, filterStatus, perPage, page]);

  // ====== Export CSV ======
  const handleExportCSV = useCallback(() => {
    if (!filteredData.length) return alert("⚠️ No data to export!");

    const exportData = filteredData.map((attr) => ({
      Name: attr.name,
      Values: attr.values?.length || 0,
      Status: attr.status,
      Month: attr.month,
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Attributes");
    XLSX.writeFile(wb, "attributes_export.csv");
    alert("✅ Exported successfully!");
  }, [filteredData]);

  // ====== Import Excel ======
  const handleImportExcel = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const data = new Uint8Array(evt.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const importedData = XLSX.utils.sheet_to_json(sheet);
        console.log("📥 Imported Attributes:", importedData);
        alert(`✅ Imported ${importedData.length} attributes successfully!`);
      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("❌ Import failed:", error);
      alert("Something went wrong while importing!");
    }
  }, []);

  // ====== Table Columns ======
  const columns = [
    {
      key: "no",
      label: "No",
      render: (item, i, page, perPage) => (page - 1) * perPage + i + 1,
      className: "text-center w-[50px]",
    },
    {
      key: "name",
      label: "Attribute Name",
      sortable: true,
      className: "capitalize font-medium text-gray-800",
    },
    {
      key: "values",
      label: "Values",
      className: "text-center hidden sm:table-cell",
      render: (item) => (
        <span className="font-medium text-gray-700">
          {item.values?.length || 0}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      className: "text-center hidden md:table-cell",
      render: (item) => <StatusBadge status={item.status} />,
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
      {/* ===== Page Header ===== */}
      <PageHeader
        title="Product Attributes"
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onAddClick={() => setShow(true)}
        addLabel="Add Attribute"
        rightActions={
          <>
            <button
              onClick={handleExportCSV}
              className="border border-border text-gray-700 text-sm px-3 py-1.5 rounded-md hover:bg-gray-50 transition"
            >
              Export CSV
            </button>
            <label className="border border-border text-gray-700 text-sm px-3 py-1.5 rounded-md hover:bg-gray-50 transition cursor-pointer">
              Import Excel
              <input
                type="file"
                accept=".xlsx, .xls"
                className="hidden"
                onChange={handleImportExcel}
              />
            </label>
          </>
        }
      />

      {/* ===== Filter Bar ===== */}
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

        {/* ===== Add Attribute Slide Panel ===== */}
        <SlidePanel
          show={show}
          title="Add Attribute"
          onClose={() => setShow(false)}
        >
          <form onSubmit={handleSubmit}>
            {/* Attribute Name */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-sm font-medium mb-1">
                Attribute Name <span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="px-3 py-2 border border-border rounded-md text-sm outline-none focus:ring-1 focus:ring-main"
                placeholder="Enter attribute name"
                value={attributeName}
                onChange={(e) => setAttributeName(e.target.value)}
              />
            </div>

            {/* Status Toggle */}
            <div className="flex items-center gap-3 mb-6">
              <label className="text-sm font-medium">Status:</label>
              <button
                type="button"
                onClick={() =>
                  setStatus(status === "active" ? "inactive" : "active")
                }
                className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
                  status === "active"
                    ? "bg-green/20 text-green border border-green"
                    : "bg-red/20 text-red border border-red"
                }`}
              >
                {status === "active" ? "Active" : "Inactive"}
              </button>
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={!attributeName}
                className={`w-full rounded-md px-7 py-2 text-white text-sm font-medium transition-all ${
                  !attributeName
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-main hover:bg-mainHover"
                }`}
              >
                Add Attribute
              </button>
            </div>
          </form>
        </SlidePanel>
      </div>
    </div>
  );
});

export default Attributes;

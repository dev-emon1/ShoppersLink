import React, { useState, useMemo, useCallback } from "react";
import * as XLSX from "xlsx";
import PageHeader from "../../../components/common/PageHeader";
import Table from "../../../components/table/Table";
import TableActions from "../../../components/table/TableActions";
import StatusBadge from "../../../components/common/StatusBadge";
import SlidePanel from "../../../components/common/SlidePanel";
import Pagination from "../../../components/Pagination";
import FilterBar from "../../../components/common/FilterBar";

// ==== Dummy Data (for now) ====
const dummyAttributes = [
  { _id: "a1", name: "Color" },
  { _id: "a2", name: "Size" },
  { _id: "a3", name: "Material" },
  { _id: "a4", name: "Storage Capacity" },
];

const dummyAttributeValues = [
  {
    _id: "v1",
    attribute: "Color",
    value: "Red",
    status: "active",
    month: "October",
  },
  {
    _id: "v2",
    attribute: "Color",
    value: "Blue",
    status: "active",
    month: "September",
  },
  {
    _id: "v3",
    attribute: "Size",
    value: "Medium",
    status: "inactive",
    month: "October",
  },
  {
    _id: "v4",
    attribute: "Material",
    value: "Cotton",
    status: "active",
    month: "August",
  },
  {
    _id: "v5",
    attribute: "Size",
    value: "Large",
    status: "active",
    month: "October",
  },
];

const AttributeValue = React.memo(() => {
  // ==== States ====
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [valueName, setValueName] = useState("");
  const [status, setStatus] = useState("active");
  const [values, setValues] = useState(dummyAttributeValues);

  // ==== Handlers ====
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
      if (!selectedAttribute) return alert("⚠️ Please select an attribute!");
      if (!valueName.trim()) return alert("⚠️ Enter attribute value!");

      const newValue = {
        _id: crypto.randomUUID?.() || Date.now().toString(),
        attribute: selectedAttribute,
        value: valueName.trim(),
        status,
        month: "October", // demo static
      };

      setValues((prev) => [...prev, newValue]);
      console.log("✅ New Attribute Value Added:", newValue);

      // reset form
      setValueName("");
      setSelectedAttribute("");
      setStatus("active");
      setShow(false);
      alert("✅ Attribute Value added successfully!");
    },
    [selectedAttribute, valueName, status]
  );

  // ==== Filter + Pagination ====
  const { filteredData, currentData, totalPages } = useMemo(() => {
    let filtered = values;

    if (searchTerm.trim()) {
      filtered = filtered.filter((item) =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterMonth)
      filtered = filtered.filter((item) => item.month === filterMonth);
    if (filterStatus)
      filtered = filtered.filter((item) => item.status === filterStatus);

    const total = Math.ceil(filtered.length / perPage);
    const start = (page - 1) * perPage;
    const current = filtered.slice(start, start + perPage);

    return { filteredData: filtered, currentData: current, totalPages: total };
  }, [values, searchTerm, filterMonth, filterStatus, perPage, page]);

  // ==== Export CSV ====
  const handleExportCSV = useCallback(() => {
    if (!filteredData.length) return alert("⚠️ No data to export!");

    const exportData = filteredData.map((v) => ({
      Attribute: v.attribute,
      Value: v.value,
      Status: v.status,
      Month: v.month,
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Attribute Values");
    XLSX.writeFile(wb, "attribute_values.csv");
    alert("✅ Exported successfully!");
  }, [filteredData]);

  // ==== Import Excel ====
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
        console.log("📥 Imported Values:", importedData);
        alert(
          `✅ Imported ${importedData.length} attribute values successfully!`
        );
      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("❌ Import failed:", error);
      alert("Something went wrong while importing!");
    }
  }, []);

  // ==== Table Columns ====
  const columns = [
    {
      key: "no",
      label: "No",
      render: (item, i, page, perPage) => (page - 1) * perPage + i + 1,
      className: "text-center w-[50px]",
    },
    { key: "attribute", label: "Attribute", sortable: true },
    { key: "value", label: "Value", sortable: true },
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
      {/* ===== HEADER ===== */}
      <PageHeader
        title="Attribute Values"
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onAddClick={() => setShow(true)}
        addLabel="Add Value"
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

      {/* ===== FILTER BAR ===== */}
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

      {/* ===== MAIN SECTION ===== */}
      <div className="flex flex-wrap w-full">
        {/* ===== TABLE SECTION ===== */}
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

        {/* ===== ADD VALUE FORM ===== */}
        <SlidePanel
          show={show}
          title="Add Attribute Value"
          onClose={() => setShow(false)}
        >
          <form onSubmit={handleSubmit}>
            {/* Select Attribute */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-sm font-medium mb-1">
                Select Attribute <span className="text-red">*</span>
              </label>
              <select
                className="px-2 py-2 border border-border rounded-md outline-none"
                value={selectedAttribute}
                onChange={(e) => setSelectedAttribute(e.target.value)}
              >
                <option value="">-- Choose Attribute --</option>
                {dummyAttributes.map((attr) => (
                  <option key={attr._id} value={attr.name}>
                    {attr.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Value Input */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-sm font-medium mb-1">
                Value Name <span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="px-2 py-2 border border-border rounded-md text-sm outline-none focus:ring-1 focus:ring-main"
                placeholder="Enter attribute value"
                value={valueName}
                onChange={(e) => setValueName(e.target.value)}
                disabled={!selectedAttribute}
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
                className={`${
                  !selectedAttribute || !valueName
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-main hover:bg-mainHover"
                } transition-all duration-150 w-full text-white rounded-md px-7 py-2`}
                disabled={!selectedAttribute || !valueName}
              >
                Add Value
              </button>
            </div>
          </form>
        </SlidePanel>
      </div>
    </div>
  );
});

export default AttributeValue;

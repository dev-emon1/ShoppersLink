import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  showRange = true,
  perPage = 10,
  onPerPageChange,
}) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    return range;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full select-none">
      {/* ===== Left Section (Page info + PerPage selector) ===== */}
      <div className="flex items-center gap-3">
        {showRange && (
          <p className="text-sm text-textSecondary dark:text-textSecondaryDark">
            Page <span className="font-medium text-main">{currentPage}</span> of{" "}
            {totalPages}
          </p>
        )}

        {/* ✅ Per Page Dropdown */}
        {onPerPageChange && (
          <div className="flex items-center gap-1">
            <label
              htmlFor="perPage"
              className="text-sm text-textSecondary dark:text-textSecondaryDark"
            >
              Show:
            </label>
            <select
              id="perPage"
              value={perPage}
              onChange={(e) => onPerPageChange(Number(e.target.value))}
              className="px-2 py-1 border border-border dark:border-borderDark rounded-md bg-transparent text-sm outline-none focus:ring-1 focus:ring-main cursor-pointer"
            >
              {[5, 10, 20, 50].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* ===== Right Section (Pagination Controls) ===== */}
      <div className="flex items-center justify-center gap-1">
        {/* Prev Button */}
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 
            ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed border-border dark:border-borderDark"
                : "hover:bg-main hover:text-textWhite border-border dark:border-borderDark"
            }`}
          aria-label="Previous Page"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Numbers */}
        {visiblePages[0] > 1 && (
          <>
            <PageButton
              page={1}
              currentPage={currentPage}
              onClick={onPageChange}
            />
            {visiblePages[0] > 2 && (
              <span className="px-2 text-textSecondary dark:text-textSecondaryDark">
                …
              </span>
            )}
          </>
        )}

        {visiblePages.map((page) => (
          <PageButton
            key={page}
            page={page}
            currentPage={currentPage}
            onClick={onPageChange}
          />
        ))}

        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <span className="px-2 text-textSecondary dark:text-textSecondaryDark">
                …
              </span>
            )}
            <PageButton
              page={totalPages}
              currentPage={currentPage}
              onClick={onPageChange}
            />
          </>
        )}

        {/* Next Button */}
        <button
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 
            ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed border-border dark:border-borderDark"
                : "hover:bg-main hover:text-textWhite border-border dark:border-borderDark"
            }`}
          aria-label="Next Page"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

// Sub-component for Page Button
const PageButton = ({ page, currentPage, onClick }) => (
  <button
    onClick={() => onClick(page)}
    className={`w-9 h-9 rounded-lg border transition-all duration-200 flex items-center justify-center 
      ${
        currentPage === page
          ? "bg-main text-textWhite border-main"
          : "hover:bg-mainSoft text-textPrimary dark:text-textPrimaryDark border-border dark:border-borderDark"
      }`}
    aria-current={currentPage === page ? "page" : undefined}
  >
    {page}
  </button>
);

export default Pagination;

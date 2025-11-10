"use client";
import { ChevronLeft } from "lucide-react";
import React from "react";

export default function MobileMenuPanel({
  title,
  items = [],
  onItemClick = () => {},
  onBack = null,
}) {
  return (
    <div className="w-full h-full shrink-0 overflow-y-auto">
      <div className="sticky top-0 z-10 bg-neutral-100 border-b">
        <div className="flex items-center gap-2 px-4 py-3">
          {onBack && (
            <button
              aria-label="Go back"
              onClick={onBack}
              className="p-2 -ml-2 rounded hover:bg-neutral-200"
            >
              <ChevronLeft size={18} />
            </button>
          )}
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
      </div>

      {/* List */}
      <ul className="px-4 py-2">
        {items.map((it, idx) => {
          const isLink = it.type === "link";
          return (
            <li key={idx}>
              <button
                onClick={() => onItemClick(it)}
                className="w-full flex items-center justify-between gap-2 py-4 border-b"
              >
                <span className={`text-[15px] ${isLink ? "" : "font-normal"}`}>
                  {it.label}
                </span>
                {!isLink && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

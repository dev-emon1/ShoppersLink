"use client";
import React from "react";

export default function ProductLayout({ children }) {
  return (
    <div className="min-h-screen bg-bgPage">
      <div>{children}</div>
    </div>
  );
}

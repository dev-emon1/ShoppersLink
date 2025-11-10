"use client";
import React, { useState } from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { categories } from "@/data/categories";
import useScrollNavbar from "@/core/hooks/useScrollNavbar";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const { showTopBar, isScrollingDown } = useScrollNavbar(80);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-bgSurface transition-all duration-300 shadow-sm">
      <div
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showTopBar
            ? "opacity-100 max-h-[32px] translate-y-0"
            : "opacity-0 max-h-0 -translate-y-3"
        }`}
      >
        <TopBar />
      </div>

      <MainNav
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        isScrollingDown={isScrollingDown}
      />

      <MegaMenu
        categories={categories}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        showTopBar={showTopBar}
      />

      <MobileMenu
        isOpen={showSidebar}
        onClose={() => setShowSidebar(false)}
        menuItems={categories}
      />
    </header>
  );
};

export default Header;

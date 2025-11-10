"use client";
import React from "react";
import { Search, X, User, Heart, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ShoppersLinkLogo from "@/components/ui/Logo";
import CartIconButton from "@/components/cart/CartIconButton";
import { useWishlist } from "@/modules/wishlist/hooks/useWishlistSession";
import WishlistIconButton from "@/components/wishlist/WishlistIconButton";

const MainNav = ({
  isSearchOpen,
  setIsSearchOpen,
  showSidebar,
  setShowSidebar,
  isScrollingDown,
}) => {
  const category = [
    "Mobile Phones",
    "Laptops & Computers",
    "Smart Watches",
    "Cameras & Accessories",
    "Headphones & Audio Devices",
    "Men’s Clothing",
    "Women’s Clothing",
    "Kids & Baby Wear",
    "Footwear",
  ];

  return (
    <nav className="relative">
      <div className="container">
        <div className=" flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2">
            <ShoppersLinkLogo
              width={100}
              height={54}
              color1="#1E293B"
              color2="#F97316"
            />
          </Link>

          <div className="hidden border border-border md:flex items-center w-full max-w-2xl relative">
            <div className="flex items-center gap-1 pr-3 border-r border-border cursor-pointer select-none min-w-[160px]">
              <select
                className="text-textSecondary text-sm bg-transparent outline-none cursor-pointer w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Category
                </option>
                {category.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="text"
              placeholder="What do you need?"
              onFocus={() => setIsSearchOpen(true)}
              className="w-full border-none outline-none px-4 py-2 text-sm text-textPrimary bg-bgSurface"
            />

            <button className="bg-main hover:bg-mainHover text-white px-5 py-2 text-sm font-medium transition-all">
              SEARCH
            </button>
          </div>

          <div className="flex items-center gap-6 text-textPrimary px-1 lg:px-0 font-medium">
            <Link
              href="/user/login"
              className="flex items-center flex-col lg:flex-row lg:gap-1 hover:text-main"
            >
              <User size={18} />{" "}
              <span className="block text-[10px] lg:text-sm">Sign In</span>
            </Link>

            <div>
              <WishlistIconButton />
            </div>
            <div>
              <CartIconButton />
            </div>

            <button
              className="md:hidden flex flex-col items-center w-[26px]"
              onClick={() => setShowSidebar((prev) => !prev)}
            >
              {showSidebar ? <X size={22} /> : <Menu size={20} />}
              <span className="text-[10px]">
                {showSidebar ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden border border-border flex items-center w-full max-w-2xl relative ml-1 pr-1 transition-all duration-300`}
        >
          <input
            type="text"
            placeholder="What do you need?"
            onFocus={() => setIsSearchOpen(true)}
            className="w-full border-none outline-none px-3 py-1 text-sm text-textPrimary bg-bgSurface"
          />
          <button className="bg-main hover:bg-mainHover border  border-main text-white px-3 py-2 text-sm font-medium transition-all">
            <Search />
          </button>
        </div>
      </div>

      {/* Search Panel */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 px-1.5 lg:px-0 w-full bg-bgSurface shadow-xl border-t border-border z-40 animate-fadeIn">
          <div className="container py-8 flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1">
              <h3 className="font-semibold text-textPrimary mb-3">
                Trending searches
              </h3>
              <ul className="space-y-2 text-textSecondary text-sm">
                <li className="hover:text-main cursor-pointer">halloween</li>
                <li className="hover:text-main cursor-pointer">
                  beauty advent calendar
                </li>
                <li className="hover:text-main cursor-pointer">
                  russell & bromley
                </li>
                <li className="hover:text-main cursor-pointer">neptune</li>
                <li className="hover:text-main cursor-pointer">headphones</li>
              </ul>
            </div>

            <div className="flex-[2]">
              <h3 className="font-semibold text-textPrimary mb-3">
                Popular products
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-sm">
                  <Image
                    src="/product1.jpg"
                    alt="Product"
                    width={200}
                    height={150}
                    className="rounded-md object-cover mb-2"
                  />
                  <p className="text-textPrimary font-medium">Shopper</p>
                  <p className="text-textSecondary">Beauty Advent Calendar</p>
                  <p className="font-semibold mt-1">£235.00</p>
                </div>
                <div className="text-sm">
                  <Image
                    src="/product2.jpg"
                    alt="Product"
                    width={200}
                    height={150}
                    className="rounded-md object-cover mb-2"
                  />
                  <p className="text-textPrimary font-medium">Samsung</p>
                  <p className="text-textSecondary">
                    The Frame (2025) QLED Smart TV
                  </p>
                  <div className="flex gap-2 items-center mt-1">
                    <p className="line-through text-textLight">£1,299.00</p>
                    <p className="text-red font-semibold">£1,199.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute top-4 right-6 flex items-center gap-2 cursor-pointer"
            onClick={() => setIsSearchOpen(false)}
          >
            <X size={18} />
            <span className="text-sm font-medium text-textSecondary">
              Close
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNav;

"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Heart,
  House,
  MoveDown,
  ShoppingBag,
  User,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

const TopBar = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isWayStoreOpen, setIsWayStoreOpen] = useState(false);

  return (
    <div className="hidden md:block bg-main text-textWhite text-sm py-1 relative z-50">
      <div className="container flex justify-between items-center">
        <div>
          <Link
            href="#"
            className="text-white uppercase text-xs font-medium hover:underline"
          >
            Always Worth What You Pay For
          </Link>
        </div>

        {/* Right side links */}
        <div className="flex gap-6 font-medium text-xs">
          <div
            className="relative"
            onMouseEnter={() => setIsHelpOpen(true)}
            onMouseLeave={() => setIsHelpOpen(false)}
          >
            <div className="text-white flex items-center gap-1 cursor-pointer hover:text-secondary duration-150 transition-all">
              <span className="capitalize">help</span>
              <span>
                <ChevronDown size={15} />
              </span>
            </div>

            {/* Dropdown Menu */}
            {isHelpOpen && (
              <div className="absolute right-0 w-48 bg-bgPage text-secondary shadow-md overflow-hidden animate-fadeIn">
                <ul className="flex flex-col py-2">
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:underline hover:text-main transition"
                    >
                      Customer services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:underline hover:text-main transition"
                    >
                      Track your order
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:underline hover:text-main transition"
                    >
                      Returns and refunds
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:underline hover:text-main transition"
                    >
                      Delivery and collection
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:underline hover:text-main transition"
                    >
                      Product support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:underline hover:text-main transition"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsWayStoreOpen(true)}
            onMouseLeave={() => setIsWayStoreOpen(false)}
          >
            <div className="text-white flex items-center gap-1 cursor-pointer hover:text-secondary duration-150 transition-all">
              <span className="capitalize">Ways to shop</span>
              <span>
                <ChevronDown size={15} />
              </span>
            </div>

            {/* Dropdown Menu */}
            {isWayStoreOpen && (
              <div className="absolute right-0 w-48 bg-bgPage text-secondary shadow-md overflow-hidden animate-fadeIn">
                <ul className="flex flex-col py-2">
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:underline hover:text-main transition"
                    >
                      Service and experiences
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:underline hover:text-main transition"
                    >
                      Gift cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:underline hover:text-main transition"
                    >
                      Our app
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:underline hover:text-main transition"
                    >
                      Brand A-Z
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="text-white flex items-center gap-2 cursor-pointer hover:text-secondary duration-150 transition-all font-medium">
            <span>
              <House size={14} />
            </span>
            Our store
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

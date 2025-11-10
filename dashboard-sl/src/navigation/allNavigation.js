import { LuLayoutDashboard } from "react-icons/lu";
import {
  FaCartArrowDown,
  FaShippingFast,
  FaUsersCog,
  FaUserTag,
} from "react-icons/fa";
import { MdInventory2, MdOutlineSecurity } from "react-icons/md";
import { PiMoneyBold } from "react-icons/pi";
import { RiCoupon3Fill } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { IoChatbox } from "react-icons/io5";
import { BiBookContent } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";

export const allNavigation = {
  admin: [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LuLayoutDashboard,
      role: "admin",
      children: [
        { name: "Overview", path: "/admin/dashboard/overview" },
        { name: "Sales Analytics", path: "/admin/dashboard/sales-analytics" },
        { name: "Website Traffic", path: "/admin/dashboard/website-traffic" },
        { name: "Activity Log", path: "/admin/dashboard/activity-log" },
      ],
    },
    {
      name: " User Management",
      path: "/admin/users",
      icon: FaUsersCog,
      role: "admin",
      children: [
        { name: "All Customers", path: "/admin/users/customers" },
        { name: "Customer Details", path: "/admin/users/customer-details/:id" },
        { name: "Customer Reviews", path: "/admin/users/customer-reviews" },
        {
          name: "Manage Roles & Permissions",
          path: "/admin/users/manage-roles",
        },
      ],
    },
    {
      name: "Order Management",
      path: "/admin/orders",
      icon: FaCartArrowDown,
      role: "admin",
      children: [
        { name: "Order List", path: "/admin/orders/order-list" },
        { name: "Order Details", path: "/admin/orders/order-details/:id" },
        { name: "Order Tracking", path: "/admin/orders/order-tracking" },
        { name: "Order History", path: "/admin/orders/order-history" },
        { name: "Refund Requests", path: "/admin/orders/refund-requests" },
        { name: "Return Management", path: "/admin/orders/return-management" },
      ],
    },
    {
      name: "Vendor Management",
      path: "/admin/vendors",
      icon: FaUserTag,
      role: "admin",
      children: [
        { name: "All Vendors", path: "/admin/vendors/all-vendors" },
        { name: "Vendor Details", path: "/admin/vendors/vendor-details/:id" },
        {
          name: "Vendor Onboarding Requests",
          path: "/admin/vendors/onboarding-requests",
        },
        { name: "Vendor Payments", path: "/admin/vendors/payments" },
        {
          name: "Vendor Reviews & Ratings",
          path: "/admin/vendors/reviews-ratings",
        },
      ],
    },
    {
      name: "Product Management",
      path: "/admin/products",
      icon: MdInventory2,
      role: "admin",
      children: [
        { name: "All Products", path: "/admin/products/all-products" },
        { name: "Category", path: "/admin/products/category" },
        { name: "Subcategory", path: "/admin/products/sub-category" },
        { name: "Child Category", path: "/admin/products/child-category" },
        { name: "Attributes", path: "/admin/products/attributes" },
        { name: "Attribute Value", path: "/admin/products/attribute-value" },
        { name: "Brand", path: "/admin/products/brand" },
        { name: "Reviews", path: "/admin/products/reviews" },
        { name: "Inventory Management", path: "/admin/products/inventory" },
        { name: "Bulk Upload", path: "/admin/products/bulk-upload" },
      ],
    },
    {
      name: "Payment Management",
      path: "/admin/payments",
      icon: PiMoneyBold,
      role: "admin",
      children: [
        {
          name: "Transaction",
          path: "/admin/payments/transactions",
        },
        { name: "Payouts", path: "/admin/payments/payouts" },
        { name: "Refunds", path: "/admin/payments/refunds" },
        { name: "Payment Gateways", path: "/admin/payments/gateways" },
        { name: "Invoices", path: "/admin/payments/invoices" },
        { name: "Commissions Settings", path: "/admin/payments/commissions" },
      ],
    },
    {
      name: "Shipping Management",
      path: "/admin/shipping",
      icon: FaShippingFast,
      role: "admin",
      children: [
        { name: "Shipping Zones", path: "/admin/shipping/zones" },
        { name: "Shipping Methods", path: "/admin/shipping/methods" },
        { name: "Carriers Integration", path: "/admin/shipping/carriers" },
        { name: "Tracking Updates", path: "/admin/shipping/tracking" },
        { name: "Shipping Rates", path: "/admin/shipping/rates" },
      ],
    },
    {
      name: "Coupons & Offers Management",
      path: "/admin/coupons",
      icon: RiCoupon3Fill,
      role: "admin",
      children: [
        { name: "All Coupons", path: "/admin/coupons/all-coupons" },
        { name: "Create Coupon", path: "/admin/coupons/create" },
        { name: "Ongoing Offers", path: "/admin/coupons/ongoing-offers" },
        { name: "Expired Offers", path: "/admin/coupons/expired-offers" },
        { name: "Coupon Usage Reports", path: "/admin/coupons/usage-reports" },
        {
          name: "Discount Campaigns",
          path: "/admin/coupons/discount-campaigns",
        },
        { name: "Flash Sales", path: "/admin/coupons/flash-sales" },
      ],
    },
    {
      name: "Reports & Analytics",
      path: "/admin/reports",
      icon: TbReportSearch,
      role: "admin",
      children: [
        { name: "Sales Reports", path: "/admin/reports/sales" },
        {
          name: "Product Performance",
          path: "/admin/reports/product-performance",
        },
        {
          name: "Vendor Performance",
          path: "/admin/reports/vendor-performance",
        },
        { name: "Customer Reports", path: "/admin/reports/customers" },
        { name: "Revenue Reports", path: "/admin/reports/revenue" },
        {
          name: "Traffic & Conversion",
          path: "/admin/reports/traffic-conversion",
        },
        { name: "Inventory Reports", path: "/admin/reports/inventory" },
      ],
    },
    {
      name: "Communication Center",
      path: "/admin/communication",
      icon: IoChatbox,
      role: "admin",
      children: [
        {
          name: "Support Tickets",
          path: "/admin/communication/support-tickets",
        },
        { name: "Live Chat", path: "/admin/communication/live-chat" },
        {
          name: "Contact Messages",
          path: "/admin/communication/contact-messages",
        },
        { name: "Announcements", path: "/admin/communication/announcements" },
        {
          name: "Email Templates",
          path: "/admin/communication/email-templates",
        },
        {
          name: "Push Notifications",
          path: "/admin/communication/push-notifications",
        },
      ],
    },
    {
      name: "Content Management",
      path: "/admin/content",
      icon: BiBookContent,
      role: "admin",
      children: [
        { name: "Home Page", path: "/admin/content/homepage" },
        { name: "About Us", path: "/admin/content/about-us" },
        { name: "Contact Page", path: "/admin/content/contact-page" },
        { name: "Blog Management", path: "/admin/content/blog" },
        { name: "FAQ Management", path: "/admin/content/faq" },
      ],
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: IoIosSettings,
      role: "admin",
      children: [
        { name: "General Settings", path: "/admin/settings/general" },
        { name: "Payment Settings", path: "/admin/settings/payments" },
        { name: "Shipping Settings", path: "/admin/settings/shipping" },
        { name: "Currency & Tax", path: "/admin/settings/currency-tax" },
        { name: "SEO Settings", path: "/admin/settings/seo" },
      ],
    },
    {
      name: "System & Security",
      path: "/admin/system-security",
      icon: MdOutlineSecurity,
      role: "admin",
      children: [
        {
          name: "Backup & Restore",
          path: "/admin/system-security/backup-restore",
        },
        { name: "Activity Logs", path: "/admin/system-security/activity-logs" },
        {
          name: "Security Settings",
          path: "/admin/system-security/security-settings",
        },
        {
          name: "API Management",
          path: "/admin/system-security/api-management",
        },
        {
          name: "Maintenance Mode",
          path: "/admin/system-security/maintenance-mode",
        },
      ],
    },
  ],
  vendor: [
    {
      name: "Dashboard",
      path: "/vendor/dashboard",
      icon: "",
      role: "vendor",
      children: [
        { name: "Overview", path: "/vendor/dashboard/overview" },
        { name: "Recent Orders", path: "/vendor/dashboard/recent-orders" },
        { name: "Sales Summary", path: "/vendor/dashboard/sales-summary" },
        {
          name: "Top Selling Products",
          path: "/vendor/dashboard/top-products",
        },
        {
          name: "Earnings Summary",
          path: "/vendor/dashboard/earnings-summary",
        },
      ],
    },
    {
      name: "Product Management",
      path: "/vendor/products",
      icon: "",
      role: "vendor",
      children: [
        {
          name: "All Products",
          path: "/vendor/products/all-products",
        },
        { name: "Add New Product", path: "/vendor/products/add-new" },
        { name: "Product Categories", path: "/vendor/products/categories" },
        { name: "Product Attributes", path: "/vendor/products/attributes" },
        { name: "Inventory Management", path: "/vendor/products/inventory" },
        { name: "Bulk Upload", path: "/vendor/products/bulk-upload" },
      ],
    },
    {
      name: "Order Management",
      path: "/vendor/orders",
      icon: "",
      role: "vendor",
      children: [
        { name: "Order List", path: "/vendor/orders/order-list" },
        { name: "Order Details", path: "/vendor/orders/order-details/:id" },
        { name: "Order Tracking", path: "/vendor/orders/order-tracking" },
        { name: "Order History", path: "/vendor/orders/order-history" },
        { name: "Return Requests", path: "/vendor/orders/return-requests" },
        { name: "Refund Requests", path: "/vendor/orders/refund-requests" },
      ],
    },
    {
      name: "Earnings & Payouts",
      path: "/vendor/earnings",
      icon: "",
      role: "vendor",
      children: [
        { name: "Earnings Overview", path: "/vendor/earnings/overview" },
        { name: "Withdrawal Requests", path: "/vendor/earnings/withdrawals" },
        { name: "Commission History", path: "/vendor/earnings/commissions" },
        { name: "Payment Transactions", path: "/vendor/earnings/transactions" },
        { name: "Payout Settings", path: "/vendor/earnings/payout-settings" },
      ],
    },
    {
      name: "Coupons & Offers",
      path: "/vendor/coupons",
      icon: "",
      role: "vendor",
      children: [
        { name: "My Coupons", path: "/vendor/coupons/my-coupons" },
        { name: "Create Coupon", path: "/vendor/coupons/create" },
        { name: "Ongoing Offers", path: "/vendor/coupons/ongoing-offers" },
        { name: "Expired Offers", path: "/vendor/coupons/expired-offers" },
        { name: "Coupon Usage Reports", path: "/vendor/coupons/usage-reports" },
        { name: "Flash Sales", path: "/vendor/coupons/flash-sales" },
        {
          name: "Discount Campaigns",
          path: "/vendor/coupons/discount-campaigns",
        },
      ],
    },
    {
      name: "Reviews & Ratings",
      path: "/vendor/reviews",
      icon: "",
      role: "vendor",
      children: [
        { name: "Product Reviews", path: "/vendor/reviews/product-reviews" },
        {
          name: "Customer Feedback",
          path: "/vendor/reviews/customer-feedback",
        },
        { name: "Review Analytics", path: "/vendor/reviews/analytics" },
      ],
    },
    {
      name: "Shipping Management",
      path: "/vendor/shipping",
      icon: "",
      role: "vendor",
      children: [
        { name: "Shipping Settings", path: "/vendor/shipping/settings" },
        { name: "Shipping Zone", path: "/vendor/shipping/zones" },
        { name: "Shipping Charge", path: "/vendor/shipping/charges" },
        { name: "Courier Tracking", path: "/vendor/shipping/courier-tracking" },
      ],
    },
    {
      name: "Profile & Store Settings",
      path: "/vendor/settings",
      icon: "",
      role: "vendor",
      children: [
        {
          name: "Store Information",
          path: "/vendor/settings/store-information",
        },
        { name: "Contact Info", path: "/vendor/settings/contact-info" },
        {
          name: "Business Documents",
          path: "/vendor/settings/business-documents",
        },
        { name: "Store SEO", path: "/vendor/settings/store-seo" },
        { name: "Account Details", path: "/vendor/settings/account-details" },
      ],
    },
    {
      name: "Reports & Analytics",
      path: "/vendor/reports",
      icon: "",
      role: "vendor",
      children: [
        { name: "Sales Reports", path: "/vendor/reports/sales" },
        {
          name: "Product Performance",
          path: "/vendor/reports/product-performance",
        },
        { name: "Customer Reports", path: "/vendor/reports/customers" },
        { name: "Commission Reports", path: "/vendor/reports/commissions" },
      ],
    },
    {
      name: "Communication Center",
      path: "/vendor/communication",
      icon: "",
      role: "vendor",
      children: [
        {
          name: "Support Tickets",
          path: "/vendor/communication/support-tickets",
        },
        { name: "Chat with Admin", path: "/vendor/communication/chat-admin" },
        {
          name: "Chat with Customers",
          path: "/vendor/communication/chat-customers",
        },
        { name: "Notifications", path: "/vendor/communication/notifications" },
      ],
    },
  ],
};

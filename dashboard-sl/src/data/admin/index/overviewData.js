import { FaUser, FaUsers, FaShoppingCart } from "react-icons/fa";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import {
  MdSell,
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
} from "react-icons/md";

export const statusCardsData = [
  {
    id: 1,
    icon: FaUser,
    title: "Total Vendors",
    count: "216",
    percentage: "3.5%",
    isIncrease: true,
    time: "Last Week",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "Total Customers",
    count: "21,216",
    percentage: "4.5%",
    isIncrease: false,
    time: "Last Week",
  },
  {
    id: 3,
    icon: FaShoppingCart,
    title: "Total Orders",
    count: "15,236",
    percentage: "5.5%",
    isIncrease: true,
    time: "Last Week",
  },
  {
    id: 4,
    icon: MdSell,
    title: "Total Sales",
    count: "$21,456",
    percentage: "4.5%",
    isIncrease: true,
    time: "Last Week",
  },
  {
    id: 5,
    icon: FaShoppingCart,
    title: "Pending Orders",
    count: "12",
    percentage: "2.5%",
    isIncrease: true,
    time: "Last Week",
  },
  {
    id: 6,
    icon: HiMiniReceiptRefund,
    title: "Refund Request",
    count: "36",
    percentage: "1.5%",
    isIncrease: false,
    time: "Last Week",
  },
];

export const activities = [
  {
    id: 1,
    title: "Your account is logged in",
    time: "45 min ago",
    user: "Wade Warren",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    title: "Current language changed",
    time: "01 hour ago",
    user: "Ronald Richards",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    title: "Asked about this project",
    time: "03 hour ago",
    user: "Kristin Watson",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

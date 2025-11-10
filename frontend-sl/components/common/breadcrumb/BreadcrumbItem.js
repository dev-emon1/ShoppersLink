import Link from "next/link";

const BreadcrumbItem = ({ href, label, isLast }) => (
  <li className="flex items-center">
    {!isLast ? (
      <Link
        href={href}
        className="hover:text-main capitalize transition font-medium"
      >
        {label}
      </Link>
    ) : (
      <span className="text-textPrimary font-semibold capitalize">{label}</span>
    )}
  </li>
);

export default BreadcrumbItem;

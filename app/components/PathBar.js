import Link from "next/link";
import { clsx } from "clsx";

export default function PathBar({ restaurantName }) {
  return (
    <nav className="text-sm mb-6" aria-label="Breadcrumb">
      <ol className="flex text-gray-600 space-x-2">
        <li>
          <Link
            href="/"
            className={clsx(
              "hover:text-green-600",
              !restaurantName && "font-semibold text-gray-900"
            )}
          >
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link
            href="/restaurants"
            className={clsx(
              "hover:text-green-600",
              restaurantName ? "hover:underline" : "font-semibold text-gray-900"
            )}
          >
            Restaurants
          </Link>
        </li>
        {restaurantName && (
          <>
            <li>/</li>
            <li className={clsx("text-gray-900", "font-semibold")}>
              {restaurantName}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}

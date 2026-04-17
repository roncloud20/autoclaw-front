import { Link } from "react-router-dom";
import clsx from "clsx";
import Placeholder from "../assets/images/products/dummy_product.png";

const ProductCard = ({
  id,
  name,
  product_image,
  initial_price,
  selling_price,
  desc,
  merchant,
  verified,
}) => {
  return (
    <Link to={`/product/${id}`} className="h-full block group">
      <article className="overflow-hidden rounded-3xl border-2 border-gray-300 dark:border-gray-700  bg-white dark:bg-gray-800 shadow-sm dark:shadow-none h-full flex flex-col md:transition-all md:duration-300 md:ease-out md:hover:shadow-xl md:hover:-translate-y-2 md:hover:border-indigo-500/50 ">
        <div className="aspect-square bg-gray-100 dark:bg-gray-700 p-4 text-gray-500 dark:text-gray-400 overflow-hidden">
          <img
            className="h-full w-full object-contain md:transition-transform md:duration-500 md:group-hover:scale-110" 
            src={ Placeholder || product_image}
            alt={name}
            loading="lazy" 
          />
        </div>

        <div className="space-y-3 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] uppercase tracking-[0.32em] text-gray-600 dark:text-gray-400">
            <span className="">{merchant}</span>
            <span
              className={clsx(
                "block",
                verified
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-rose-600 dark:text-rose-400",
              )}
            >
              {verified ? "Verified" : "Unverified"}
            </span>
          </div>

          <h2 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {name}
          </h2>
          <p className="text-sm leading-5 text-gray-600 dark:text-gray-400 line-clamp-3">
            {desc}
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-2xl bg-gray-100 dark:bg-gray-700 p-2 text-xs text-gray-700 dark:text-gray-300">
              <p className="uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                List price
              </p>
              <p className="mt-1 text-base font-semibold">
                ₦{initial_price.toLocaleString()}
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 p-2 text-xs text-emerald-700 dark:text-emerald-300">
              <p className="uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                Your price
              </p>
              <p className="mt-1 text-base font-semibold text-emerald-700 dark:text-emerald-300">
                ₦{selling_price.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;

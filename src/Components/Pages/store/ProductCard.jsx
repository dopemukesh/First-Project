import React from "react";

function ProductCard({ product }) {
  return (
    <div className="w-72 mt-2 bg-slate-200 dark:bg-inherit">
      <a
        href="#"
        className="relative block rounded-tr-3xl border border-gray-100"
      >
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
          Save {Math.ceil(Math.random(6) * 100)}%
        </span>

        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full rounded-tr-3xl object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300?text=Image+Not+Available";
          }}
        />

        <div className="p-4 text-center ">
          <strong className="text-xl font-medium text-gray-900 dark:text-white">
            {product.name}
          </strong>

          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
            {product.description}
          </p>

          <span className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
            Buy Now
          </span>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;

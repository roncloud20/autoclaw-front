import ProductCard from "../components/ProductCard";
import productsData from "../assets/products.json";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const Products = ({ quantity }) => {
  if (!quantity) quantity = productsData.products.length;
  const products = productsData.products.slice(0, quantity) || [];

  return (
    <>
      {useLocation().pathname === "/products" && <Header />}

      <section className="space-y-8 mt-5">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Products
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
            Explore the latest automotive parts and accessories with competitive
            pricing.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-stretch">
          {products.map(
            ({
              id,
              name,
              product_image,
              initial_price,
              selling_price,
              desc,
              merchant,
              verified,
            }) => (
              <ProductCard
                key={id}
                name={name}
                id={id}
                product_image={product_image}
                initial_price={initial_price}
                selling_price={selling_price}
                desc={desc}
                merchant={merchant}
                verified={verified}
              />
            ),
          )}
        </div>
      </section>
    </>
  );
};

export default Products;

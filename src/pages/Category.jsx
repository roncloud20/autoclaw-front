import CategoryCard from "../components/CategoryCard";
import products from "../assets/products.json";

const Category = () => {
  const allCategories = products.products.map((product) => ({
    name: product.category,
    id: product.id,
  }));

  const categories = allCategories.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.name === value.name),
  );

  return (
    <section className="space-y-8 mt-5">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Categories
        </h1>
        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
          Explore Products by Categories.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5 ">
        {categories.map((category) => (
          <CategoryCard
            className="skill-item text-center p-4 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white cursor-pointer hover:transform hover:scale-105 transition duration-100"
            key={category.id}
            name={category.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;

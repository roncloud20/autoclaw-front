import { Link } from "react-router-dom";
import Header from "../components/Header";
import Category from "./Category";
import Products from "./Products";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Products quantity={8} />

        <Link
          to="/products"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-3 mt-6"
        >
          View more 👉
        </Link>
        <Category />
      </main>
    </div>
  );
}

export default Home;

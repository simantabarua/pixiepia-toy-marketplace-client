import { useEffect, useState } from "react";
import CategoryNav from "../components/home/CategoryNav";
import usePageTitle from "../hooks/useTitle";
import { BiFilter } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import Loading from "../components/common/Loading";
import ToyCard from "../components/home/ToyCard";
import { useForm } from "react-hook-form";

const Shop = () => {
  usePageTitle("Shop");
  const [showSidebar, setShowSidebar] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const [loading, setIsLoading] = useState(true);
  const { register, handleSubmit } = useForm();
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetchData();
  }, [selectedPage]);

  const fetchData = () => {
    setIsLoading(true);
    fetch(`https://server-pixiepia.vercel.app/page?page=${selectedPage + 1}`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data.results);
        setTotalPages(data.totalPages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  const handlePagination = (pageNumber) => {
    setSelectedPage(pageNumber - 1);
  };

  const handleFilterButtonClick = () => {
    setShowSidebar(!showSidebar);
  };

  const handleFilter = (data) => {
    setIsLoading(true);
    fetch(
      `https://server-pixiepia.vercel.app/filter_price?minPrice=${data.minPrice}&maxPrice=${data.maxPrice}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsLoading(false);
      });
  };

  const handleCategorySelect = (category) => {
    setIsLoading(true);
    fetch(`https://server-pixiepia.vercel.app/category/${category}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
        setIsLoading(false);
      });
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="bg-gray-100 min-h-screen mt-24">
      <div className="flex items-center justify-between p-4 bg-white">
        <button
          onClick={handleFilterButtonClick}
          className="lg:hidden btn btn-outline flex items-center"
        >
          {showSidebar ? (
            <GrClose className="w-5 h-5" />
          ) : (
            <BiFilter className="w-5 h-5" />
          )}
          Filter
        </button>
        <CategoryNav handleCategorySelect={handleCategorySelect} />
      </div>

      <main className="container mx-auto flex">
        {/* Sidebar */}
        <aside
          className={`${
            showSidebar ? "block" : "hidden lg:block"
          }   mt-4 p-4 lg:sticky lg:top-16 lg:h-screen absolute z-40 bg-white`}
        >
          <h2 className="text-xl font-bold mb-4">Filter By</h2>
          <form onSubmit={handleSubmit(handleFilter)} className="space-y-4">
            {/* Price Filter */}
            <div>
              <label className="block text-lg font-semibold">Price Range</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Min"
                  className="input input-bordered w-24"
                  {...register("minPrice")}
                />
                <input
                  type="text"
                  placeholder="Max"
                  className="input input-bordered w-24"
                  {...register("maxPrice")}
                />
                <button type="submit" className="btn bg-pink-600 border-none w-20">
                  Apply
                </button>
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <label className="block text-lg font-semibold">Color</label>
              <div className="space-y-1">
                {["Red", "Blue", "Orange", "Pink", "Various"].map((color) => (
                  <div key={color} className="flex items-center">
                    <input type="checkbox" className="checkbox mr-2" />
                    <label>{color}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Filter */}
            <div>
              <label className="block text-lg font-semibold">Age Range</label>
              <div className="space-y-1">
                {[
                  "0-3 years",
                  "4-6 years",
                  "7-9 years",
                  "10-12 years",
                  "13+ years",
                ].map((age) => (
                  <div key={age} className="flex items-center">
                    <input type="checkbox" className="checkbox mr-2" />
                    <label>{age}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <label className="block text-lg font-semibold">Material</label>
              <div className="space-y-1">
                {["Plastic", "Wood", "Metal", "Fabric", "Plush"].map(
                  (material) => (
                    <div key={material} className="flex items-center">
                      <input type="checkbox" className="checkbox mr-2" />
                      <label>{material}</label>
                    </div>
                  )
                )}
              </div>
            </div>
          </form>
        </aside>

        {/* Product Grid */}
        <section className="flex-1 p-4">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            {toys.length} Toys Found
          </h1>
          <div className="product-grid">
            {toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center my-8 gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePagination(index + 1)}
                className={`btn border-none ${
                  index === selectedPage
                    ? "bg-pink-600 text-white hover:bg-pink-700"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Shop;

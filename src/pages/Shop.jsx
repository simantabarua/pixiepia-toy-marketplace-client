import { useEffect, useState } from "react";
import CategoryNav from "../components/home/CategoryNav";
import usePageTitle from "../hooks/useTitle";
import { BiFilter } from "react-icons/bi";
import Loading from "../components/common/Loading";
import ToyCard from "../components/home/ToyCard";
import { useForm } from "react-hook-form";

const Shop = () => {
  usePageTitle("Shop");
  const [showSidebar, setShowSidebar] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const buttons = Array.from(Array(totalPages).keys());
  const [selectedPage, setSelectedPage] = useState(0);
  const [loading, setIsLoading] = useState(true);
  const { register, handleSubmit } = useForm();

  const [toys, setToys] = useState([]);


  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      fetch(`https://server-pixiepia.vercel.app/page`)
        .then((response) => response.json())
        .then((data) => {
          const { results, totalPages } = data;
          setTotalPages(totalPages);
          setToys(results);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  const handlePagination = (pageNumber) => {
    setIsLoading(true)
    setSelectedPage(pageNumber - 1);
    fetch(`https://server-pixiepia.vercel.app/page?page=${pageNumber}}`)
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        setToys(results);
        setIsLoading(false)
      });
  };
  const handleFilterButtonClick = () => {
    setShowSidebar(!showSidebar);
  };

  const handleFilter = (data) => {
    setIsLoading(true);
    const { minPrice, maxPrice } = data;
    fetch(
      `https://server-pixiepia.vercel.app/filter_price?minPrice=${minPrice}&maxPrice=${maxPrice}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsLoading(false)
      });
  };

  const handleCategorySelect = (category) => {
    setIsLoading(true);
    fetch(`https://server-pixiepia.vercel.app/search/${category}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
        setIsLoading(false)
      });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <label
          onClick={handleFilterButtonClick}
          htmlFor="my-drawer-2"
          className="btn btn-outline drawer-button lg:hidden"
        >
          <BiFilter />
          Filter
        </label>
        <CategoryNav handleCategorySelect={handleCategorySelect} />
      </div>

      <main className="flex-grow  place-items-center grid grid-cols-1 lg:grid-cols-12 relative">
        
        <div
          className={`bg-gray-900 bg-opacity-70 lg:bg-opacity-0 h-full ${
            showSidebar ? "md:block" : "hidden lg:block"
          } w-full  md:col-span-2 z-10 absolute lg:relative`}
        >
          <div className=" w-10/12 md:w-1/2 lg:w-full">
            <p className="text-xl font-bold text-center p-4 bg-pink-400 text-white">
              Filter By
            </p>
            <div className="px-4 font-bold ">
              <p className="card-title py-2">Price</p>
              <form onSubmit={handleSubmit(handleFilter)}>
                <div className="flex gap-1 ">
                  <input
                    type="text"
                    placeholder="Min"
                    className="input input-bordered w-20"
                    {...register("minPrice")}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Max"
                    className="input input-bordered w-20"
                    {...register("maxPrice")}
                    required
                  />
                  <button type="submit" className="btn btn-secondary">
                    filter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="md:col-span-10">
        <p className="text-2xl font-bold text-center my-5">Toy Found { toys.length}</p>
          <div className="flex flex-wrap items-center justify-center   my-5  gap-6 px-3 lg:px-6">
            
            {toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy} />
            ))}
          </div>
          <div>
            <div className="btn-group flex justify-center my-2">
              {buttons.map((index) => (
                <button
                  onClick={() => {
                    handlePagination(index + 1);
                  }}
                  className={`btn  ${
                    index === selectedPage ? "bg-pink-600" : ""
                  }`}
                  key={index}
                  >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;

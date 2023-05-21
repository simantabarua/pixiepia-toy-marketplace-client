import { useEffect, useState } from "react";
import CategoryNav from "../components/home/CategoryNav";
import usePageTitle from "../hooks/useTitle";
import { BiFilter } from "react-icons/bi";
import Loading from "../components/common/Loading"; 
import ToyCard from "../components/home/ToyCard";

const Shop = () => {
  usePageTitle("Shop");
  const [showSidebar, setShowSidebar] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const [loading, setIsLoading] = useState(true);

  const [toys, setToys] = useState([]);

  const handleSearch = (result) => {
    console.log("Search result:", result);
    setToys(result);
  };
  console.log(toys);

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
    setSelectedPage(pageNumber - 1);
    fetch(`https://server-pixiepia.vercel.app/page?page=${pageNumber}}`)
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        setToys(results);
        console.log(results);
      });
  };

  const buttons = Array.from(Array(totalPages).keys());

  if (loading) {
    return <Loading />;
  }
  const handleFilterButtonClick = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div className="min-h-screen flex flex-col p-4">
        <div>
          <label
            onClick={handleFilterButtonClick}
            htmlFor="my-drawer-2"
            className="btn btn-outline drawer-button md:hidden"
          >
            <BiFilter />
            Filter
          </label>
          <CategoryNav />
        </div>
        <main className="flex-grow  grid grid-cols-1 md:grid-cols-12 relative">
          <div
            className={`bg-gray-600 bg-opacity-30 h-full ${
              showSidebar ? "md:block" : "hidden md:block"
            } w-full md:col-span-3 z-10 absolute md:relative`}
          >
            <ul className="bg-orange-400 w-4/5">
              <li>kdjfksdjkfj</li>
            </ul>
          </div>

          <div className="md:col-span-9">
            <div className="grid grid-cols-1 place-items-center lg:grid-cols-2   my-5 xl:grid-cols-2 gap-6 md:px-3 lg:px-6">
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
      </div>
    </>
  );
};

export default Shop;

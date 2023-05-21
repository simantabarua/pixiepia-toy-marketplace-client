import { useEffect, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import CategoryNav from "./CategoryNav";
import ToyCard from "./ToyCard";
import Loading from "../common/Loading";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      fetch(`https://server-pixiepia.vercel.app/toys`)
        .then((res) => res.json())
        .then((result) => {
          setToys(result);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  const handleCategorySelect = (category) => {
    setIsLoading(true);
    fetch(`https://server-pixiepia.vercel.app/category/${category}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
        setIsLoading(false);
      });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <SectionHeader
        title={"Discover the Perfect Toy for Every Adventure"}
        subtitle={
          "Explore our Wide Range of Categories and Find the Perfect Toy for Every Child"
        }
      />
      <CategoryNav handleCategorySelect={handleCategorySelect} />
      {toys.length === 0 ? (
        <div className="h-64 flex items-center justify-center">
          <p className="text-2xl  text-pink-700">No Toys found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 xl:grid-cols-3 gap-6  px-3 lg:px-6">
          {toys.slice(0, 6)?.map((toy) => (
            <ToyCard key={toy._id} toy={toy} />
          ))}
        </div>
      )}
      <div className="flex items-center justify-center py-5">
        {toys.length !== 0 && (
          <Link to="/shop">
            <button className="btn btn-secondary animate-bounce ">
              See all toys
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default ShopByCategory;

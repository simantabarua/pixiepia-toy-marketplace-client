import { useEffect, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import CategoryNav from "./CategoryNav";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setToys(result);
      });
  }, []);

  const handleCategorySelect = (category) => {
    fetch(`http://localhost:5000/search/${category}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setToys(result);
      });
  };
  return (
    <div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 xl:grid-cols-3 gap-6 md:px-3 lg:px-6">
          {toys?.map((toy) => (
            <ToyCard key={toy._id} toy={toy} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopByCategory;

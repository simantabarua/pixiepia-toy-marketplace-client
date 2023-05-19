import { Link, useLoaderData } from "react-router-dom";
import Search from "../components/common/Search";
import { useState } from "react";

const AllToys = () => {
  const toysData = useLoaderData();
  const [toys, setToys] = useState(toysData);

  const handleSearch = (result) => {
    console.log("Search result:", result);
    setToys(result);
  };
  return (
    <div>
      <div className="flex justify-end p-5">
        <Search onSearch={handleSearch} />
      </div>
      <div className="overflow-x-auto">
        {toys.length === 0 ? (
          <div>
            <h2 className="text-xl font-bold text-center p-5">No Data found</h2>
          </div>
        ) : (
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Toy Name</th>
                <th>Seller</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Listed Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {toys.map(
                ({
                  _id,
                  toyName,
                  price,
                  sellerName,
                  subCategory,
                  availableQuantity,
                  releaseDate,
                }) => (
                  <tr key={_id}>
                    <td></td>
                    <td>{toyName}</td>
                    <td>{sellerName}</td>
                    <td>{subCategory}</td>
                    <td>{price}</td>
                    <td>{availableQuantity}</td>
                    <td>{releaseDate}</td>
                    <td>
                      <Link to={`/toydetails/${_id}`}>
                        <button className="btn bg-pink-600 border-0">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllToys;

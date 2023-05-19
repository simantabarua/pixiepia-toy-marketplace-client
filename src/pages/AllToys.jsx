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
      <div className="overflow-x-auto px-2 md:px-24 py-10">
        {toys.length === 0 ? (
          <div>
            <h2 className="text-xl font-bold text-center p-5">No Data found</h2>
          </div>
        ) : (
          <table className="table table-compact w-full text-center">
            <thead>
              <tr>
                <th> </th>
                <th>Toy Name</th>
                <th>Seller</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>

                <th>
                  {" "}
                  <Search onSearch={handleSearch} />
                </th>
              </tr>
            </thead>
            <tbody>
              {toys?.map(
                ({
                  _id,
                  toyName,
                  price,
                  sellerName,
                  subcategory,
                  availableQuantity,
                }) => (
                  <tr key={_id}>
                    <td></td>
                    <td className="text-left">{toyName}</td>
                    <td>{sellerName}</td>
                    <td>{subcategory}</td>
                    <td>{price}</td>
                    <td>{availableQuantity}</td>

                    <td>
                      <Link to={`/toydetails/${_id}`}>
                        <button className="btn btn-sm bg-pink-600 border-0">
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

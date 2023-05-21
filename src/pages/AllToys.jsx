import { Link } from "react-router-dom";
import Search from "../components/common/Search";
import { useEffect, useState } from "react";
import usePageTitle from "../hooks/useTitle";
import Loading from "../components/common/Loading";

const AllToys = () => {
  usePageTitle("All Toys");
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const [loading, setIsLoading] = useState(true);

  const [toys, setToys] = useState([]);

  const handleSearch = (result) => {
    setToys(result);
  };

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
          console.log('Error fetching data:', error);
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  const handlePagination = (pageNumber) => {
    setIsLoading(true);
    setSelectedPage(pageNumber - 1);
    fetch(`https://server-pixiepia.vercel.app/page?page=${pageNumber}}`)
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        setToys(results);
        setIsLoading(false);
      });
  };

  const buttons = Array.from(Array(totalPages).keys());

  if (loading) {
    return <Loading />;
  } 
  return (
    <div>
      <div className="overflow-x-auto px-2 md:px-24 pt-10">
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
      <div>
        <div className="btn-group flex justify-center my-2">
          {buttons.map((index) => (
            <button
              onClick={() => {
                handlePagination(index + 1);
              }}
              className={`btn  ${index === selectedPage ? "bg-pink-600" : ""}`}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToys;

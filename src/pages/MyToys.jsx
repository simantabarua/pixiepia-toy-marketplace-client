import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FaArrowDown, FaArrowUp, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import usePageTitle from "../hooks/useTitle";
import Loading from "../components/common/Loading";

const MyToys = () => {
  usePageTitle("My Toys");
  const { user, loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const url = `https://server-pixiepia.vercel.app/mytoys/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [url]);

  const handleSortByPrice = (sort) => {
    fetch(
      `https://server-pixiepia.vercel.app/sort_toys/${user?.email}?sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  console.log(toys);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-pixiepia.vercel.app/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            console.log(data);
          });
      }
    });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub-category</th>
              <th>
                Price <span>sort by:</span>
                <button
                  onClick={() => {
                    handleSortByPrice("asc");
                  }}
                  className="btn btn-xs"
                >
                  <FaArrowUp />
                </button>
                <button
                  onClick={() => {
                    handleSortByPrice("desc");
                  }}
                  className="btn btn-xs"
                >
                  <FaArrowDown />{" "}
                </button>
              </th>
              <th>Available Quantity</th>
              <th></th>
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
                  <td>{toyName}</td>
                  <td>{sellerName}</td>
                  <td>{subcategory}</td>
                  <td>{price}</td>
                  <td>{availableQuantity}</td>
                  <td className="space-x-5">
                    <div
                      className="tooltip hover:tooltip-open tooltip-top"
                      data-tip="View Detail"
                    >
                      <Link to={`/toydetails/${_id}`}>
                        {" "}
                        <button className="btn btn-circle bg-green-500 border-0">
                          <FaEye />
                        </button>{" "}
                      </Link>
                    </div>
                    <div
                      className="tooltip hover:tooltip-open tooltip-top"
                      data-tip="Update"
                    >
                      <Link to={`/update_toy/${_id}`}>
                        <button className="btn btn-circle bg-yellow-500 border-0">
                          <FaEdit />
                        </button>
                      </Link>
                    </div>
                    <div
                      className="tooltip hover:tooltip-open tooltip-top"
                      data-tip="Delete"
                    >
                      <button
                        onClick={() => {
                          handleDelete(_id);
                        }}
                        className="btn btn-circle bg-red-500 border-0"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="btn-group ">
        <button className="btn">1</button>
        <button className="btn btn-active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
      </div>
    </div>
  );
};

export default MyToys;

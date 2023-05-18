import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user, loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const url = `http://localhost:5000/mytoys/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [url]);

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
        fetch(`http://localhost:5000/toy/${id}`, {
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
    return <div>Loading</div>;
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
              <th>Price</th>
              <th>Available Quantity</th>
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
              }) => (
                <tr key={_id}>
                  <td></td>
                  <td>{toyName}</td>
                  <td>{sellerName}</td>
                  <td>{subCategory}</td>
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
    </div>
  );
};

export default MyToys;

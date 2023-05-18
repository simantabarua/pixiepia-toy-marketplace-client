import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
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
                  <td>
                    <button>View Details</button>
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

import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
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

export default AllToys;

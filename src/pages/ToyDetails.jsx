import { CiImageOff } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    sellerName,
    sellerEmail,
    toyName,
    description,
    price,
    availableQuantity,
    category,
    subCategory,
    brand,
    material,
    color,
    weight,
    countryOfOrigin,
    pictureUrl,
    ageRange,
    detailDescription,
  } = toy;
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-2  md:py-24 md:px-24 max-w-6xl mx-auto">
          {pictureUrl ? (
            <img src={pictureUrl} className="max-w-sm rounded-lg shadow-2xl " />
          ) : (
              <div>
                <CiImageOff className="w-32 h-32" />
                <h2>Image not Found :( </h2>
            </div>
          )}
          <div className="space-y-4">
            <p className="font-semibold">{brand}</p>
            <h1 className="text-5xl font-bold">{toyName}</h1>
            <p>{subCategory}</p>
            <p className="py-6">{description}</p>
            <p className="text-xl font-bold">${price}</p>
            <div className="flex gap-10">
              <p>Color: {color}</p>{" "}
              <p>Available Quantity: {availableQuantity}</p>
            </div>
            <div className="space-x-3">
              <button className="btn bg-pink-600 border-0">Buy Now</button>
              <button className="btn bg-pink-100 btn-outline">
                Add to Whitelist
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="md:max-w-5xl mx-auto py-5">
            <h2 className="text-xl font-semibold py-5">Specification</h2>
            <table className="table w-full  ">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{toyName}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{price}</td>
                </tr>

                <tr>
                  <td>Material</td>
                  <td>{material}</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>{weight}</td>
                </tr>
                <tr>
                  <td>Age Range</td>
                  <td>{ageRange}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{category}</td>
                </tr>
                <tr>
                  <td>Seller Name</td>
                  <td>{sellerName}</td>
                </tr>
                <tr>
                  <td>Seller Email</td>
                  <td>{sellerEmail}</td>
                </tr>
                <tr>
                  <td>Country of Origin</td>
                  <td>{countryOfOrigin}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{detailDescription}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
// picture, toy name, seller name, seller email, price, rating, available quantity, and detail description

// Picture URL of the toy,
// Name,
// seller name (if available from the logged in user)
// seller email (info from the logged in user)
// Sub-category ( For example: if the website is based on Educational and learning toys, the sub-categories can be Math Toys, Language Toys, and Science Toys.)
// Price,
// Rating,
// Available quantity
// Detail description

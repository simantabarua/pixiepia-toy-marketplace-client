import { useContext } from "react";
import { CiImageOff } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/feature/cart/cart";
import { FaCartPlus, FaEye } from "react-icons/fa";

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleAddToCart = (productId, productName) => {
    dispatch(addItem({ id: productId, productName, quantity: 1 }));
  };

  const handleViewDetails = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "You need to log in to view details.",
      });
    }
  };

  const { _id, toyName, price, subcategory, rating, pictureUrl } = toy;

  return (
    <div
      className="card max-w-xs w-full h-full mx-auto md:mx-h-[28rem] bg-white shadow-xs rounded-lg p-2 md:p-4"
      // data-aos="zoom-in-up"
      // data-aos-duration="800"
    >
      <figure className="mb-2">
        {pictureUrl ? (
          <img
            src={pictureUrl}
            className="h-full w-full max-h-44 object-scale-down rounded-lg"
            alt={toyName}
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col  justify-center h-60 bg-gray-200 rounded-lg">
            <CiImageOff className="w-12 h-12 text-gray-500" />
            <h2 className=" text-sm text-gray-500">Image not available</h2>
          </div>
        )}
      </figure>

      <div>
        <h2 className="text-lg font-bold text-gray-700 truncate">{toyName}</h2>
        <div className="badge badge-secondary">{subcategory}</div>

        <div className="flex justify-between text-gray-600 text-sm py-2">
          <span>
            Price: <span className="font-semibold">${price}</span>
          </span>
          <span>
            Rating: <span className="font-semibold">{rating}</span>
          </span>
        </div>

        <div className="card-actions flex gap-1 md:gap-3 justify-center  md:mt-2">
          <Link
            to={`/toydetails/${_id}`}
            onClick={handleViewDetails}
            className="btn btn-sm bg-pink-600 border-0 text-white p-2"
          >
            <FaEye className="text-lg" />
          </Link>
          <button
            onClick={() => handleAddToCart(_id, toyName)}
            className="btn btn-sm bg-pink-600 border-0 text-white p-2"
          >
            <FaCartPlus className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

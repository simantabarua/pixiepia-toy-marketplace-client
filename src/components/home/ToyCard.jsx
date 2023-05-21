import { useContext } from "react";
import { CiImageOff } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);

  const handleViewDetails = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title:"You need login fist to view Details"})
    }
  };

  const { _id, toyName, price, subcategory, rating, pictureUrl } = toy;
  return (
    <div
      className="card  w-full h-full  md:w-96 md:h-[29rem] bg-pink-100 shadow-xl rounded-xl  md:p-4 "
      data-aos="zoom-in-up"
      data-aos-duration="800"
      
    >
      <figure>
        {pictureUrl ? (
          <img
            src={pictureUrl}
            className="h-64 w-fit object-left-top object-cover  md:w-96 rounded-lg"
            loading="lazy"
          />
        ) : (
          <div>
            <CiImageOff className="w-full h-64" />
            <h2 className="text-center">Image not Found : </h2>
          </div>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <div className="badge badge-secondary">{subcategory}</div>
        <div className="flex flex-col md:flex-row md:gap-20">
          <span> Price: ${price}</span>
          <span>Rating: {rating}</span>
        </div>
        <div className="card-actions">
          
          <Link to={`/toydetails/${_id}`}><button
            onClick={() => {
              handleViewDetails();
            }}
            className="btn btn-sm bg-pink-600 border-0"
          >
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

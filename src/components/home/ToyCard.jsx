import { CiImageOff } from "react-icons/ci";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, toyName, price, subcategory, rating, pictureUrl } = toy;
  return (
    <div className="card-compact  w-full h-full  md:w-96 md:h-[29rem] bg-pink-100 shadow-xl rounded-xl  md:p-4 ">
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
          <Link to={`/toydetails/${_id}`}>
            <button className="btn btn-sm bg-pink-600 border-0">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

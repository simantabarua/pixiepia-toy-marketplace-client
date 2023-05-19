import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, toyName, price, subcategory, rating, pictureUrl } = toy;
  return (
    <div className="mt-4">
      <div className="w-96 h-[30rem]  bg-pink-100 shadow-xl rounded-xl overflow-hidden p-4 ">
        <figure>
          <img
            src={pictureUrl}
            className="w-full h-64 object-fill rounded-lg "
            loading="lazy"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <div className="badge badge-secondary">{subcategory}</div>
          <div className="space-x-32">
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
    </div>
  );
};

export default ToyCard;

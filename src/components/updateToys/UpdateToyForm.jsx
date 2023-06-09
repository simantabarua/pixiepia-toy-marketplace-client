import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { options } from "../../utils/categoryOptions";
import Loading from "../common/Loading";

const UpdateToyForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const { loading } = useContext(AuthContext);
  const toy = useLoaderData();
  const {
    _id,
    sellerEmail,
    sellerName,
    toyName,
    description,
    price,
    availableQuantity,
    category,
    brand,
    material,
    color,
    weight,
    countryOfOrigin,
    pictureUrl,
    ageRange,
    detailDescription,
  } = toy;

  const handleUpdateToy = (data) => {
    console.log(data);
    fetch(`https://server-pixiepia.vercel.app/toy/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire("Updated!", "Your file has been Updated.", "success");
        }
      });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdateToy)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full md:max-w-7xl mx-auto px-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              {...register("toyName")}
              defaultValue={toyName}
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              {...register("price")}
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("category")}
              className="select select-ghost w-full max-w-xs input-bordered"
              defaultValue={category}
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              {options?.map((option, index) => (
                <option key={index} defaultValue={category}>
                  {option.category}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <select
              {...register("subcategory")}
              className="select select-ghost w-full max-w-xs input-bordered"
              required
            >
              <option value="" disabled>
                Select Sub Category
              </option>
              {options?.map(
                (option) =>
                  option.category === watch("category") &&
                  option.subcategories?.map((subcat, subIndex) => (
                    <option key={subIndex}>{subcat}</option>
                  ))
              )}
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description")}
              defaultValue={description}
              placeholder="Description"
              className="input input-bordered pt-2"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail Description</span>
            </label>
            <textarea
              {...register("detailDescription")}
              defaultValue={detailDescription}
              placeholder="Detail Description"
              className="input input-bordered pt-2"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              {...register("availableQuantity")}
              defaultValue={availableQuantity}
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input
              type="text"
              {...register("pictureUrl")}
              defaultValue={pictureUrl}
              placeholder="Picture URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              {...register("sellerName")}
              value={sellerName}
              placeholder="Seller Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              value={sellerEmail}
              {...register("sellerEmail")}
              placeholder="Seller Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              {...register("rating")}
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              {...register("brand")}
              defaultValue={brand}
              placeholder="Brand"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Age Range</span>
            </label>
            <input
              type="text"
              {...register("ageRange")}
              defaultValue={ageRange}
              placeholder="Age Range"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Material</span>
            </label>
            <input
              type="text"
              {...register("material")}
              defaultValue={material}
              placeholder="Material"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Weight</span>
            </label>
            <input
              type="text"
              {...register("weight")}
              defaultValue={weight}
              placeholder="Weight"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Color</span>
            </label>
            <input
              type="text"
              {...register("color")}
              defaultValue={color}
              placeholder="Color"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country of Origin</span>
            </label>
            <input
              type="text"
              {...register("countryOfOrigin")}
              defaultValue={countryOfOrigin}
              placeholder="Country of Origin"
              className="input input-bordered"
            />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <button type="submit" className="btn bg-pink-600 w-96">
            Update Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToyForm;

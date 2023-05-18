import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";

const AddToyForm = () => {
  const { register, handleSubmit } = useForm();
  const { user, loading } = useContext(AuthContext);
  console.log(user.displayName);

  const handleAddToys = (data) => {
    console.log(data);
    // Perform your logic to submit the form data
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <form onSubmit={handleSubmit(handleAddToys)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full md:max-w-7xl mx-auto px-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input
            type="text"
            {...register("toyName")}
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
            step="0.01"
            {...register("price")}
            placeholder="Price"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            {...register("category")}
            placeholder="Category"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-category</span>
          </label>
          <input
            type="text"
            {...register("subCategory")}
            placeholder="Sub-category"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description")}
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
            placeholder="Detail Description"
            className="input input-bordered pt-2"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity </span>
          </label>
          <input
            type="text"
            {...register("availableQuantity")}
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
            value={user?.displayName}
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
            value={user?.email}
            {...register("sellerEmail")}
            placeholder="Seller Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Release Date</span>
          </label>
          <input
            type="date"
            {...register("date")}
            placeholder="Release Date"
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
            placeholder="Country of Origin"
            className="input input-bordered"
          />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button type="submit" className="btn bg-pink-600 w-96">
          Add Toy
        </button>
      </div>
    </form>
  );
};

export default AddToyForm;

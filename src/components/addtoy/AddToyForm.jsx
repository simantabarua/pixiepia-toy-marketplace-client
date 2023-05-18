import { useForm } from "react-hook-form";

const AddToyForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Perform your logic to submit the form data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
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
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            {...register("image")}
            placeholder="Image URL"
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
            <span className="label-text">Features</span>
          </label>
          <input
            type="text"
            {...register("features")}
            placeholder="Features"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity </span>
          </label>
          <input
            type="text"
            {...register("availability")}
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
            {...register("sellerEmail")}
            placeholder="Seller Email"
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
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            {...register("availableQuantity")}
            placeholder="Available Quantity"
            className="input input-bordered"
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
            <span className="label-text">Recommended Age</span>
          </label>
          <input
            type="text"
            {...register("recommendedAge")}
            placeholder="Recommended Age"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Packaging</span>
          </label>
          <input
            type="text"
            {...register("packaging")}
            placeholder="Packaging"
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

      <div className="flex justify-center ">
        <button type="submit" className="btn bg-pink-600 w-96">
          Add Toy
        </button>
      </div>
    </form>
  );
};

export default AddToyForm;

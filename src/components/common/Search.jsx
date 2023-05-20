import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSearch = (data) => {
    console.log(data.search);
    fetch(`https://server-pixiepia.vercel.app/search/${data.search}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // Pass the search result to the parent component
        onSearch(result);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSearch)}>
        <div className="form-control">
          <div className="input-group">
            <input
              {...register("search", { required: "Please type something" })}
              type="text"
              placeholder="Search Toys.."
              className="input input-bordered"
            />

            <button
              className="btn btn-square bg-pink-600 border-0"
              type="submit"
            >
              <FaSearch />
            </button>
          </div>
          {errors.search && (
            <p className="text-red-600">{errors.search.message}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;

import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto my-24">
      <div>
        <img src="" className="w-80" alt="" />
      </div>
      <div className="px-5 py-10 border-2 shadow-xl rounded-lg font-bold ">
        <h2 className="text-4xl text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" space-y-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="enter your userName"
                className={`input input-bordered ${
                  errors.userName ? "input-error" : ""
                }`}
                {...register("userName", { required: "Name is required" })}
              />
              {errors.userName && (
                <p className="text-red-600">{errors.userName.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="enter your email"
                className={`input input-bordered ${
                  errors.email ? "input-error" : ""
                }`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="enter your password"
                className={`input input-bordered ${
                  errors.password ? "input-error" : ""
                }`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="enter confirm password"
                className={`input input-bordered ${
                  errors.confirmPassword ? "input-error" : ""
                }`}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
            <button className="btn bg-pink-600 w-full border-0" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

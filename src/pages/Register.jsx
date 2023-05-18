import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUserWithEmail, auth } = useContext(AuthContext);
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const { email, userName, password, photo } = data;
    createUserWithEmail(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          photoURL: photo,
          displayName: userName,
        });
        Swal.fire({
          icon: "success",
          title: "Sign in success",
        });
        navigate("/");
      })
      .catch((error) => {
        let errorMessage = "";
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "Email address is already in use.";
            break;
          case "auth/invalid-email":
            errorMessage = "Invalid email address.";
            break;
          default:
            errorMessage = error.message;
            break;
        }
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<span style="color:red">${errorMessage}</span>`,
        });
      });
  };

  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 bg-pink-50 md:py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <img src="" className="w-80" alt="" />
      </div>
      <div className="px-5 py-10 border-2 shadow-xl rounded-xl font-bold max-w-lg">
        <h2 className="text-4xl text-center">Register</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
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
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="enter your photoURL"
                className={`input input-bordered ${
                  errors.photo ? "input-error" : ""
                }`}
                {...register("photo", { required: "photoURL is required" })}
              />
              {errors.photo && (
                <p className="text-red-600">{errors.photo.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full ${
                    errors.password ? "input-error" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: passwordPattern,
                      message:
                        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.",
                    },
                  })}
                />
                <button
                  className="absolute right-2 inset-y-0"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="enter confirm password"
                  className={`input input-bordered w-full ${
                    errors.confirmPassword ? "input-error" : ""
                  }`}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                <button
                  className="absolute right-2 inset-y-0"
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
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

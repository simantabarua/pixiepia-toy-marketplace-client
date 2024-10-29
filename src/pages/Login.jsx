import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import usePageTitle from "../hooks/useTitle";
import Lottie from "lottie-react";
import login from "./../../public/login.json";

const Login = () => {
  usePageTitle("Login");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { signInUser, googleLogin, setLoading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;

    // Email password login
    signInUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Sign in success",
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        let errorMessage;
        switch (error.code) {
          case "auth/invalid-email":
            errorMessage = "Invalid email address";
            break;
          case "auth/user-disabled":
            errorMessage = "This account has been disabled";
            break;
          case "auth/user-not-found":
            errorMessage = "User not found";
            break;
          case "auth/wrong-password":
            errorMessage = "Incorrect password try again";
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

  // google login
  const handleGoogleSignIn = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Sign in success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<span style="color:red">${error.message}</span>`,
        });
      });
  };

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center bg-pink-50 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 card">
          <div>
            <Lottie className="h-32" animationData={login} />
            <h2 className="mt-6 text-center text-md md:text-2xl font-extrabold">
              Log in to your account
            </h2>
          </div>
          <form onSubmit={handleSubmit(handleLogin)} className=" space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="enter your email"
                {...register("email", { required: "Email is required" })}
                className={`input input-bordered ${
                  errors.email ? "input-error" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`input input-bordered w-full ${
                    errors.password ? "input-error" : ""
                  }`}
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
            <div className="flex items-center justify-between flex-wrap text-center">
              <div className="form-control">
                <label className="cursor-pointer label justify-normal md:gap-x-2 text-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text px-1"> Remember me</span>
                </label>
              </div>
              <div>
                <a href="#" className="btn-link">
                  Forget password
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button type="submit" className="btn bg-pink-600 border-0 w-full">
                Log in
              </button>
            </div>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline  w-full"
          >
            <img
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              className="w-6 h-6 mx-2"
            />{" "}
            Login With Google
          </button>

          <div>
            <h2>
              Don&apos;t have an account?{" "}
              <Link className="btn-link" to="/register">
                Click here to Register
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

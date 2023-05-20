import { Link, useRouteError } from "react-router-dom";
import usePageTitle from "../hooks/useTitle";
import Lottie from "lottie-react";
import cat from "./../../public/cat.json";

const NotFound = () => {
  usePageTitle("404");
  const { error, status, statusText } = useRouteError();
  return (
    <div className=" min-h-screen flex flex-col-reverse  -mt-36 md:mt-0   items-center justify-center bg-gray-100">
      <div className="text-center -mt-16">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-pink-300">
          {status || "Error :("}
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-pink-700 mt-4">
          {statusText || "Something is wrong!"}
        </p>
        <p className="text-gray-500 mt-4 pb-4 text-center">{error?.message}</p>

        <Link
          to="/"
          className="btn bg-pink-600 border-none btn-sm "
        >
          Go back to the homepage
        </Link>
      </div>
      <Lottie className="h-72" animationData={cat} />
    </div>
  );
};

export default NotFound;

import Lottie from "lottie-react";
import train from "../../../public/train.json";
const Loading = () => {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
          <Lottie className="h-72" animationData={train} />
          <h2 className="text-center text-xl md:text-3xl font-semibold animate-pulse -mt-10">Please Wait...</h2>
    </div>
  );
};

export default Loading;

import { FiTruck } from "react-icons/fi";
import { RiRefund2Fill } from "react-icons/ri";
import { BsGift, BsHeadset } from "react-icons/bs";

import SectionHeader from "../common/SectionHeader";

const OurServices = () => {
  return (
    <div>
      <SectionHeader
        title={"Our Services"}
        subtitle={
          "Discover Limitless Possibilities with Our Extraordinary Services"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center py-8">
        <div className="text-center">
          <FiTruck className="w-full h-12 text-pink-400" />
          <h2 className="font-extrabold text-xl">Worldwide Shipping</h2>
          <p>On Order Over $99 </p>
          <p>Our dedicated support team is available 24/7 </p>
        </div>
        <div className="text-center">
          <BsHeadset className="w-full h-12 text-pink-400" />
          <h2 className="font-extrabold text-xl">24x7 Service</h2>
          <p>Our dedicated support team is available 24/7 </p>
        </div>
        <div className="text-center">
          <BsGift className="w-full h-12 text-pink-400" />
          <h2 className="font-extrabold text-xl">Gift Voucher</h2>
          <p>Give the perfect gift with our customizable gift vouchers.</p>
        </div>
        <div className="text-center">
          <RiRefund2Fill className="w-full h-12 text-pink-400" />
          <h2 className="font-extrabold text-xl">Money Back</h2>
          <p>Experience Worry-Free Shopping with Our Reliable Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

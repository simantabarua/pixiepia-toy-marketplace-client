import { FiTruck } from "react-icons/fi";
import { RiRefund2Fill } from "react-icons/ri";
import { BsGift, BsHeadset } from "react-icons/bs";

import SectionHeader from "../common/SectionHeader";

const OurServices = () => {
  const servicesData = [
    {
      icon: <FiTruck className="w-full h-12 text-pink-400" />,
      title: "Worldwide Shipping",
      description:
        "On Order Over $99\nOur dedicated support team is available 24/7",
    },
    {
      icon: <BsHeadset className="w-full h-12 text-pink-400" />,
      title: "24x7 Service",
      description: "Our dedicated support team is available 24/7",
    },
    {
      icon: <BsGift className="w-full h-12 text-pink-400" />,
      title: "Gift Voucher",
      description: "Give the perfect gift with our customizable gift vouchers.",
    },
    {
      icon: <RiRefund2Fill className="w-full h-12 text-pink-400" />,
      title: "Money Back",
      description: "Experience Worry-Free Shopping with Our Reliable Guarantee",
    },
  ];
 

  return (
    <div>
      <SectionHeader
        title={"Our Services"}
        subtitle={
          "Discover Limitless Possibilities with Our Extraordinary Services"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center py-8">
        {servicesData.map((service, index) => (
          <div
            className="text-center"
            key={index}
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            {service.icon}
            <h2 className="font-extrabold text-xl">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;

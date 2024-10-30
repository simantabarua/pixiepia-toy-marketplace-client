import { FiTruck } from "react-icons/fi";
import { RiRefund2Fill } from "react-icons/ri";
import { BsGift, BsHeadset } from "react-icons/bs";
import SectionHeader from "../common/SectionHeader";

const OurServices = () => {
  const servicesData = [
    {
      icon: <FiTruck className="w-10 h-10 text-pink-500" />,
      title: "Worldwide Shipping",
      description: "Enjoy global delivery on orders over $99.",
    },
    {
      icon: <BsHeadset className="w-10 h-10 text-pink-500" />,
      title: "24/7 Support",
      description: "Our team is here to assist you around the clock.",
    },
    {
      icon: <BsGift className="w-10 h-10 text-pink-500" />,
      title: "Gift Vouchers",
      description: "Share joy with our customizable gift vouchers.",
    },
    {
      icon: <RiRefund2Fill className="w-10 h-10 text-pink-500" />,
      title: "Money-Back Guarantee",
      description: "Shop confidently with our hassle-free returns.",
    },
  ];

  return (
    <div className="py-12">
      <SectionHeader
        title="Our Services"
        subtitle="Discover the unparalleled advantages we offer with our top-notch services."
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {servicesData.map((service, index) => (
          <div
            className="text-center p-4  transition-shadow duration-200"
            key={index}
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;

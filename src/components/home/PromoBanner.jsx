const PromoBanner = () => {
  const bannerData = [
    {
      imageUrl: "https://i.ibb.co/d4Q3RXq/buytoy.jpg",
      discount: "50% OFF",
      title: "Fantastic Toy",
    },
    {
      imageUrl: "https://i.ibb.co/Mcn3Sdk/buytoy3.jpg",
      discount: "On Sale",
      title: "ColorFull Toy",
    },
    {
      imageUrl: "https://i.ibb.co/KFR22tr/buytoy2.jpg",
      discount: "Big Discount",
      title: "Amazing Toy",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-4 w-full xl:container mx-auto my-8 px-2">
      {bannerData.map((banner, index) => (
        <div
          key={index}
          className="relative h-64 p-5 flex justify-end items-center my-2 overflow-hidden rounded-lg cursor-pointer "
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          <img
            className="absolute  inset-0 w-full h-full object-fit object-cover transition-transform duration-1000 ease-in-out transform hover:scale-110"
            src={banner.imageUrl}
            alt="Banner Image"
          />
          <div className="relative flex justify-center flex-col gap-2 text-white">
            <p className="font-bold ">{banner.discount}</p>
            <h2 className="font-bold text-2xl">{banner.title}</h2>
            <p>
              <button className="btn btn-secondary btn-sm">Shop Now</button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoBanner;

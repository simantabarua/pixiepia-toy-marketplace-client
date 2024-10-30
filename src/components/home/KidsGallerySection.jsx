import SectionHeader from "../common/SectionHeader";

const KidsGallerySection = () => {
  const images = [
    "https://i.ibb.co/Khk0Gqz/4.webp",
    "https://i.ibb.co/DrPF6qF/6.webp",
    "https://i.ibb.co/9YFSxzm/5.webp",
    "https://i.ibb.co/84d5ZHZ/7.webp",
    "https://i.ibb.co/ZSq637s/8.webp",
    "https://i.ibb.co/9wJnJ9C/3.webp",
  
  ];

  return (
    <div className="py-12 bg-gray-50 ">
      <SectionHeader
        title={"Kids Zone"}
        subtitle={"Pixiepia: Where Dreams Become Reality!"}
      />
      <div className="grid grid-cols-3 container mx-auto">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="relative overflow-hidden transition-transform duration-300"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <img
              src={imageUrl}
              alt={`Kids gallery image ${index + 1}`}
              className="w-300 h-300 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsGallerySection;

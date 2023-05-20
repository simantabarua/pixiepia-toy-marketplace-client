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
    <div>
      <SectionHeader title={"Kids Zone"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative overflow-hidden cursor-pointer">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsGallerySection;

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center py-8">
      <h2
        className="text-2xl md:text-4xl font-bold text-gray-800 mb-2"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {title}
      </h2>
      <p
        className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;

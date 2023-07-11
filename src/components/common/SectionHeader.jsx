import './SectionHeader.css'

const SectionHeader = ({ title, subtitle }) => {

  return (
    <div className="sectionHeader">
      <h2 className="text-xl md:text-4xl font-bold" data-aos="fade-up"
     data-aos-duration="800">
        {title}
      </h2>
      <p className="text-sm md:text-xl" data-aos="fade-up"
     data-aos-duration="800">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;

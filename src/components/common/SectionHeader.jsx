const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-pink-100 h- md:h-56 text-center py-8 space-y-4 flex flex-col items-center justify-center">
      <h2 className="text-xl md:text-4xl font-bold">{title}</h2>
      <p className="text-sm md:text-xl">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;

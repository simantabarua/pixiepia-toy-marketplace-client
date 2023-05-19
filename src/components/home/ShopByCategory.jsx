import SectionHeader from "../common/SectionHeader";
import CategoryNav from "./CategoryNav";

const ShopByCategory = () => {
  
  return (
    <div>
      <SectionHeader
        title={"Discover the Perfect Toy for Every Adventure"}
        subtitle={
          "Explore our Wide Range of Categories and Find the Perfect Toy for Every Child"
        }
      />
      <CategoryNav />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6 md:px-3 lg:px-6 place-items-center">
        
      </div>
    </div>
  );
};

export default ShopByCategory;

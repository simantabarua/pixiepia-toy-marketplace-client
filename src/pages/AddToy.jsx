import AddToyForm from "../components/addtoy/AddToyForm";
import SectionHeader from "../components/common/SectionHeader";
import usePageTitle from "../hooks/useTitle";

const AddToy = () => {
  usePageTitle("Add Toy");
  return (
    <>
      <SectionHeader title={"Add toy"} />
      <AddToyForm />
    </>
  );
};

export default AddToy;

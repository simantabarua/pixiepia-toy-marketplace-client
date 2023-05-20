import AddToyForm from "../components/addtoy/AddToyForm";
import usePageTitle from "../hooks/useTitle";

const AddToy = () => {
  usePageTitle('Add Toy')
  return <AddToyForm />;
};

export default AddToy;
